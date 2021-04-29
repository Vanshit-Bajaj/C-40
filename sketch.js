var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var cars,car1,car2,car3,car4; 
var track,ground,car1_image,car2_image,car3_image,car4_image;

function preload(){
track=loadImage("images/track.jpg")
ground=loadImage("images/ground.png")
car1_image=loadImage("images/car1.png")
car2_image=loadImage("images/car2.png")
car3_image=loadImage("images/car3.png")
car4_image=loadImage("images/car4.png")
}


function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if (gameState===2){
    game.end()
  }
}
