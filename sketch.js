const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var canvas,backgroundImg,gameOverImg,restartImg,player;
function preload(){

backgroundImg = loadImage("background.png");
gameOverImg = loadImage("gameover.png");
restartImg = loadImage("restart.png");

}
function setup(){

canvas = createCanvas(displayWidth,displayHeight);
engine = Engine.create();
world = engne.world;

player = new Player(250,200,50,60);

}
function draw(){
background(backgroundImg);


}