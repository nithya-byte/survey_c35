
var playercount=0;

var database;
function setup(){
  database = firebase.database();
  console.log(database);
  var canvas=createCanvas(500,500);
  canvas.visible=false;
game=new game();

game.start();
  
}

function draw(){
  background("white");
  
   
  
}

