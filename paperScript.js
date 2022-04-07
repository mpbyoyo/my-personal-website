project.currentStyle = {
	strokeColor: 'black',
	fillColor: 'red',
};


var rows = 10;
var colls = 10;
var gridCells = [];
 
 for (var x = 0; x < rows; x++) {
	for (var y = 0; y < colls; y++) {
		var cell = [];

		var path1 = new Path();
		path1.add(new Point(0 + (x*25), 0 + (y*25))); 
		path1.add(new Point(0 + (x*25), 25 + (y*25))); 
		cell.push(path1);
		
		var path2 = new Path();
		path2.add(new Point(0 + (x*25), 0 + (y*25))); 
		path2.add(new Point(25 + (x*25), 0 + (y*25)));
		cell.push(path2);
		
		var path3 = new Path();
		path3.add(new Point(25 + (x*25), 25 + (y*25))); 
		path3.add(new Point(25 + (x*25), 0 + (y*25))); 
		cell.push(path3);
		
		var path4 = new Path();
		path4.add(new Point(25 + (x*25), 25 + (y*25))); 
		path4.add(new Point(0 + (x*25), 25 + (y*25))); 
		cell.push(path4);
		gridCells.push(cell);
	}
 }
 


 