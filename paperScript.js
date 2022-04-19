project.currentStyle = {
	strokeColor: 'white',
	strokeWidth: 2,
};

var text = new PointText(new Point(97, 100));
text.content = "Click me!";
text.strokeWidth = 1;
text.fillColor = "white";
// Note: For some reason Paper.js won't allow me to use const or let, so all variables are declared with var.

// defines number of rows and colums in the grid. Yes I am aware colums is spelled with 1 "l"
var rows = 10;
var colls = 10;
var wallSize = 15;

// creates array that will containin all cells in the grid, top to bottom, left to right. 
var gridCells = [];
var walls = [];
// this is so I can keep track of which wall belongs to which cell. This is importatnt for the maze generation.
var cellCounter = 0;

// creates a 10x10 grid of cells. Each cell is made of 4 individual paths, which are bundled up into a cell variable,
// which is then passed into the gridCells variable. This lets me keep track of all the cells and still be able to remove
// individual walls from the cell.
function genGrid() {
	for (var x = 0; x < rows; x++) {
		for (var y = 0; y < colls; y++) {
			// created object that will contain all the paths created in the loop.
			var cell = [];
			cell.push(cellCounter)
			// new paths. First value in the new Point() is the x coord of the point, and the second value is the y coord.
			// The canvas is 250x250, and I want a 10x10 grid, so every iteration the next line should be 25 pixels farther
			// than the last. Hence the 0 + (x*25) and 0 + (y*25). The walls will appear in the cell array in the order they
			// are created: left, top, right, bottom.
	
			// init leftWall var as a new path
			var leftWall = new Path(); // 0
			// adding points nessecary to create wall
			leftWall.add(new Point(0 + ((x)*wallSize), 0 + ((y)*wallSize))); 
			leftWall.add(new Point(0 + ((x)*wallSize), wallSize + ((y)*wallSize))); 
			// adding "cell" key with the value of x times y. This will let me determine which cell every wall belongs to,
			// which is important for the maze generating algorithm.
			leftWall['cell'] = cellCounter;
			leftWall['wallSide'] = 'leftWall'
			cell.push(leftWall);
			walls.push(leftWall);
			
			var topWall = new Path(); // 1
			topWall.add(new Point(0 + ((x)*wallSize), 0 + ((y)*wallSize))); 
			topWall.add(new Point(wallSize + ((x)*wallSize), 0 + ((y)*wallSize)));
			topWall['cell'] = cellCounter;
			topWall['wallSide'] = 'topWall'
			cell.push(topWall);
			walls.push(topWall);
			
			var rightWall = new Path(); // 2
			rightWall.add(new Point(wallSize + ((x)*wallSize), 25 + ((y)*wallSize))); 
			rightWall.add(new Point(wallSize + ((x)*wallSize), 0 + ((y)*wallSize))); 
			rightWall['cell'] = cellCounter;
			rightWall['wallSide'] = 'rightWall'
			cell.push(rightWall);
			walls.push(rightWall);
			
			var bottomWall = new Path(); // 3
			bottomWall.add(new Point(wallSize + ((x)*wallSize), wallSize + ((y)*wallSize))); 
			bottomWall.add(new Point(0 + ((x)*wallSize), wallSize + ((y)*wallSize))); 
			bottomWall['cell'] = cellCounter;
			bottomWall['wallSide'] = 'bottomWall'
			cell.push(bottomWall);
			walls.push(bottomWall);
			
			gridCells.push(cell);
			cellCounter += 1;
		}
	 }
}
 

 console.log(walls);
 console.log(gridCells);

 // if bottom to top, current wall + 2
 // if top to bottom, current wall - 2
 // if right to left, current wall + 38
 // if left to right, current wall - 38


//  (function myLoop(i) {
//   setTimeout(function() {
    
// 	var wall = _.shuffle(walls).slice(0,1)[0];
// 	var wallI = walls.indexOf(wall);
// 	// var wallParrentArr = gridCells[wall.cell]

// 	if (wall.wallSide === 'leftWall') {

// 		var oppositeWall = walls[(wallI - 38)];
// 		var oppositeWallI = walls.indexOf(oppositeWall);
		
// 		if (oppositeWall !== undefined && wall.cell !== oppositeWall.cell) {

// 			// var oppositeWallParrentArr = gridCells[oppositeWall.cell];
// 			var cellSet = wall.cell;
// 			console.log(gridCells[wall.cell])
// 			console.log(gridCells[oppositeWall.cell])
// 			gridCells[wall.cell] = gridCells[wall.cell].concat(gridCells[oppositeWall.cell])
// 			console.log(gridCells[wall.cell])
			

// 			for (var i = 0; i<gridCells[wall.cell].length; i++) {
// 				console.log(1)
// 			}

			
// 			wall.remove();
// 			oppositeWall.remove();
// 		}

// 	} else if (wall.wallSide === 'topWall') {

// 		var oppositeWall = walls[(wallI - 2)];
// 		var oppositeWallI = walls.indexOf(oppositeWall)

// 		if (oppositeWall !== undefined && wall.cell !== oppositeWall.cell) {

			
			
// 			wall.remove();
// 			oppositeWall.remove();
// 		}


// 	} else if (wall.wallSide === 'rightWall') {

// 		var oppositeWall = walls[(wallI + 38)]
// 		var oppositeWallI = walls.indexOf(oppositeWall)

// 		if (oppositeWall !== undefined && wall.cell !== oppositeWall.cell) {

			
			
// 			wall.remove();
// 			oppositeWall.remove();
// 		}


// 	} else if (wall.wallSide === 'bottomWall') {

// 		var oppositeWall = walls[(wallI + 38)]
// 		var oppositeWallI = walls.indexOf(oppositeWall)

// 		if (oppositeWall !== undefined && wall.cell !== oppositeWall.cell) {

			
			
			
// 			wall.remove();
// 			oppositeWall.remove();
// 		}
// 	}               
//     if (--i) myLoop(i);
//   }, 10)
// })(walls.length);   

function generateMaze () {
	for (var i = 0; i < walls.length; i++) {
		var wall = _.shuffle(walls).slice(0,1)[0];
		var wallI = walls.indexOf(wall);
		var wallParrentArr = gridCells[wall.cell]
	
		if (wall.wallSide === 'leftWall') {
	
			var oppositeWall = walls[(wallI - 38)];
			var oppositeWallI = walls.indexOf(oppositeWall);
			
			if (oppositeWall !== undefined && !wallParrentArr.includes(oppositeWall)) {
	
				var cellSet = wall.cell;
				// console.log(gridCells[wall.cell])
				// console.log(gridCells[oppositeWall.cell])
	
				gridCells[wall.cell] = gridCells[wall.cell].concat(gridCells[oppositeWall.cell])
				
				// console.log(gridCells[wall.cell])
				
				
				wall.remove();
				oppositeWall.remove();
			}
	
		} else if (wall.wallSide === 'topWall') {
	
			var oppositeWall = walls[(wallI - 2)];
			var oppositeWallI = walls.indexOf(oppositeWall)
	
			if (oppositeWall !== undefined && wall.cell !== oppositeWall.cell) {
	
				
				
				wall.remove();
				oppositeWall.remove();
			}
	
	
		} else if (wall.wallSide === 'rightWall') {
	
			var oppositeWall = walls[(wallI + 38)]
			var oppositeWallI = walls.indexOf(oppositeWall)
	
			if (oppositeWall !== undefined && wall.cell !== oppositeWall.cell) {
	
				
				
				wall.remove();
				oppositeWall.remove();
			}
	
	
		} else if (wall.wallSide === 'bottomWall') {
	
			var oppositeWall = walls[(wallI + 38)]
			var oppositeWallI = walls.indexOf(oppositeWall)
	
			if (oppositeWall !== undefined && wall.cell !== oppositeWall.cell) {
	
				
				
				
				wall.remove();
				oppositeWall.remove();
			}
		}
	}
}

var gridGenerated = false
var mazeGenerated = false


function onMouseDown(event) {
	text.remove();
	if (gridGenerated===false) {
		gridGenerated = true;
		genGrid();
	} else if (mazeGenerated===false) {
		mazeGenerated = true;
		generateMaze();
	} else if (mazeGenerated===true) {
		genGrid();
		generateMaze();
	}
}

// idrk why this doesn't work
// var mazeButton = document.getElementsByClassName(".maze-gen-button");
// mazeButton.addEventListener('click', () => {
// 	generateMaze();
// });

