var database;
var drawing = [];
var currentPath = [];
var isDrawing = false;

function setup() {
  database = firebase.database();
  var canvas = createCanvas(400,400);
  canvas.mousePressed(startPath);
  canvas.mouseReleased(endPath);
  canvas.parent('canvascontainer');
}

function draw() {
  background(0);  

  if(isDrawing)
  {
    var point = {
      x:mouseX,
      y:mouseY
    }
    currentPath.push(point);
  }

  strokeWeight(3);
  stroke(255);
  noFill();
  for(var i = 0; i < drawing.length; i++) {
    var path = drawing[i];
    beginShape();
    for(var j = 0; j < path.length; j++) {
      vertex(path[j].x, path[j].y);
    }
    endShape();
  }

  drawSprites();
}

function startPath()
{
  isDrawing = true;
  currentPath = [];
  drawing.push(currentPath);
}

function endPath()
{
  isDrawing = false;
}

