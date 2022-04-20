var w = window.innerWidth;
var h = window.innerHeight;
var cen = new Point(w/2, h/2)
var planets = [];

var sound = new Audio("the-sun-is-a-deadly-laser.mp3");

var scaler = 0.6;

function onKeyDown(event) {
  if (Key.isDown('=')) {
    scaler += 0.1
  } else if (Key.isDown('-')) {
    scaler -= 0.1
  }
}

function genSun() {
  var sun = new Path.Circle({
      center: cen,
      radius: 50*scaler,
      strokeColor: 'orange',
  });
  sun.fillColor = {
      gradient: {
          stops: [['white', 0.01],['#fff6c9', 0.05],   ['#ffefa3', 0.5], ['orange', 0.99]],
          radial: true
      },
      origin: sun.position,
      destination: sun.bounds.rightCenter
  };
}

function genMercury() {
  var mercury = new Path.Circle({
      center: new Point(850*scaler, 500*scaler),
      radius: 10*scaler,
      strokeColor: 'grey',
      fillColor: 'grey'
  });
  planets.push(mercury);
  return mercury;
}

function genMars() {
  var mars = new Path.Circle({
      center: new Point(750*scaler, 500*scaler),
      radius: 15*scaler,
      strokeColor: 'brown',
      fillColor: 'brown'
  });
  return mars;
}

function genEarth() {
  var earth = new Path.Circle({
      center: new Point(650*scaler, 500*scaler),
      radius: 17*scaler,
      strokeColor: 'green',
      strokeWidth: 4*scaler,
      fillColor: 'blue'
  });
  planets.push(earth);
  return earth;
}

function genVenus() {
  var venus = new Path.Circle({
      center: new Point(550*scaler, 500*scaler),
      radius: 12*scaler,
      strokeColor: '#946548',
      fillColor: '#946548'
  });
  planets.push(venus);
  return venus;
}

function genJupiter() {
  var jupiter = new Path.Circle({
      center: new Point(450*scaler, 500*scaler),
      radius: 30*scaler,
      strokeColor: '#ad9e89',
      fillColor: '#ad9e89'
  });
  planets.push(jupiter);
  return jupiter;
}

function genSaturn() {
  var saturn = new Path.Circle({
      center: new Point(350*scaler, 500*scaler),
      radius: 26*scaler,
      strokeColor: '#c4a77e',
      fillColor: '#c4a77e'
  });
  planets.push(saturn);
  return saturn;
}

function genUranus() {
  var uranus = new Path.Circle({
      center: new Point(250*scaler, 500*scaler),
      radius: 20*scaler,
      strokeColor: '#93abba',
      fillColor: '#93abba'
  });
  planets.push(uranus);
  return uranus;
}

function genNeptune() {
  var neptune = new Path.Circle({
      center: new Point(150*scaler, 500*scaler),
      radius: 20*scaler,
      strokeColor: '#61719f',
      fillColor: '#61719f'
  });
  planets.push(neptune);
  return neptune;
}

function genMercOrbit() {
  var path = new Path.Circle({
    center: cen,
    radius: 110*scaler,
    strokeColor: 'white',
    opacity: 0.1
});
  return path
}

function genMarsOrbit() {
  var path = new Path.Circle({
    center: cen,
    radius: 210*scaler,
    strokeColor: 'white',
    opacity: 0.1
});
  return path
}

function genEarthOrbit() {
  var path = new Path.Circle({
    center: cen,
    radius: 310*scaler,
    strokeColor: 'white',
    opacity: 0.1
});
  return path
}

function genVenusOrbit() {
  var path = new Path.Circle({
    center: cen,
    radius: 410*scaler,
    strokeColor: 'white',
    opacity: 0.1
});
  return path
}

function genJupiterOrbit() {
  var path = new Path.Circle({
    center: cen,
    radius: 510*scaler,
    strokeColor: 'white',
    opacity: 0.1
});
  return path
}

function genSaturnOrbit() {
  var path = new Path.Circle({
    center: cen,
    radius: 610*scaler,
    strokeColor: 'white',
    opacity: 0.1
});
  return path
}

function genUranusOrbit() {
  var path = new Path.Circle({
    center: cen,
    radius: 710*scaler,
    strokeColor: 'white',
    opacity: 0.1
});
  return path
}

function genNeptuneOrbit() {
  var path = new Path.Circle({
    center: cen,
    radius: 810*scaler,
    strokeColor: 'white',
    opacity: 0.1
});
  return path
}

function getDistance(x1, y1, x2, y2) {
  a = x1 - x2
  b = y1 - y2
  return Math.sqrt( a*a + b*b )
}

function onFrame(event) {
  // Earth's orbit anim
  if (offsetEarth < earthPath.length){
    earth.position = earthPath.getPointAt(offsetEarth);
    distance = getDistance(earth.position.x, earth.position.y, cen.x, cen.y)    
    offsetEarth += event.delta * (45000*scaler/distance)
  }
  else {
    offsetEarth = 0;
  }

  // mercury's orbit anim
  if (offsetMerc < mercPath.length){
    mercury.position = mercPath.getPointAt(offsetMerc);
    distance = getDistance(mercury.position.x, mercury.position.y, cen.x, cen.y)    
    offsetMerc += event.delta * (45000*scaler/distance)
  }
  else {
    offsetMerc = 0;
  }

  // mars' orbit anim
  if (offsetMars < marsPath.length){
    mars.position = marsPath.getPointAt(offsetMars);
    distance = getDistance(mars.position.x, mars.position.y, cen.x, cen.y)    
    offsetMars += event.delta * (45000*scaler/distance)
  }
  else {
    offsetMars = 0;
  }

  // venus' orbit anim
  if (offsetVenus < venPath.length){
    venus.position = venPath.getPointAt(offsetVenus);
    distance = getDistance(venus.position.x, venus.position.y, cen.x, cen.y)    
    offsetVenus += event.delta * (45000*scaler/distance)
  }
  else {
    offsetVenus = 0;
  }

  // jupiter's orbit anim
  if (offsetJupiter < jupiterPath.length){
    jupiter.position = jupiterPath.getPointAt(offsetJupiter);
    distance = getDistance(jupiter.position.x, jupiter.position.y, cen.x, cen.y)    
    offsetJupiter += event.delta * (45000*scaler/distance)
  }
  else {
    offsetJupiter = 0;
  }

  // saturn's orbit anim
  if (offsetSaturn < saturnPath.length){
    saturn.position = saturnPath.getPointAt(offsetSaturn);
    distance = getDistance(saturn.position.x, saturn.position.y, cen.x, cen.y)    
    offsetSaturn += event.delta * (45000*scaler/distance)
  }
  else {
    offsetSaturn = 0;
  }

  // uranus's orbit anim
  if (offsetUranus < uranusPath.length){
    uranus.position = uranusPath.getPointAt(offsetUranus);
    distance = getDistance(uranus.position.x, uranus.position.y, cen.x, cen.y)    
    offsetUranus += event.delta * (45000*scaler/distance)
  }
  else {
    offsetUranus = 0;
  }

  // neptune's orbit anim
  if (offsetNeptune < neptunePath.length){
    neptune.position = neptunePath.getPointAt(offsetNeptune);
    distance = getDistance(neptune.position.x, neptune.position.y, cen.x, cen.y)    
    offsetNeptune += event.delta * (45000*scaler/distance)
  }
  else {
    offsetNeptune = 0;
  }
}

genSun();

var mercury = genMercury();
var mercPath = genMercOrbit();
var mars = genMars();
var marsPath = genMarsOrbit();
var earthPath = genEarthOrbit();
var earth = genEarth();
var venus = genVenus();
var venPath = genVenusOrbit();
var jupiter = genJupiter();
var jupiterPath = genJupiterOrbit();
var saturn = genSaturn();
var saturnPath = genSaturnOrbit();
var uranus = genUranus();
var uranusPath = genUranusOrbit();
var neptune = genNeptune();
var neptunePath = genNeptuneOrbit();
var offsetMerc = 0;
var offsetVenus = 0;
var offsetEarth = 0;
var offsetMars = 0;
var offsetJupiter = 0;
var offsetSaturn = 0;
var offsetUranus = 0;
var offsetNeptune = 0;