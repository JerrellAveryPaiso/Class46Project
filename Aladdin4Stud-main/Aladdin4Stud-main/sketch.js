var bg, bg2;
var aladdin, aladdinImg;
var jasmine, jasmineImg;
var genie, genieImg;
var carpet, carpetImg;
var playButton, playButtonImg;
var rock, rock1Img, rock2, rock2Img, rockGroup, rock2Group;
var coin, coinImg, coinGroup;
var gameOver, gameOverImg;
var reset, resetImg;
var jafar, jafarImg;
var fire, fireImg, fireGroup;
var confetti, confettiImg;
var congrats, congratsImg;
var edges;
var coinSound, dieSound, fireSound, jumpSound, resetSound, winSound;

var score=0;
var lives=3;

function preload(){
  bgImg=loadImage("Images/bg0.jpg");
  bgImg2=loadImage("Images/bg1.jpg");
  bgImg3=loadImage("Images/bg2.jpg");
  aladdinImg=loadImage("Images/aladdin.png");
  genieImg=loadImage("Images/genie.png");
  carpetImg=loadImage("Images/Carpet.png");
  playButtonImg=loadImage("Images/PlayButton.png");
  rock1Img=loadImage("Images/rock1.png");
  rock2Img=loadImage("Images/rock2.png");
  coinImg=loadImage("Images/coin.png");
  gameOverImg=loadImage("Images/gameOver.png");
  resetImg=loadImage("Images/reset.png");
  jafarImg=loadImage("Images/Jafar.png");
  fireImg=loadImage("Images/fire.png");
  jasmineImg=loadImage("Images/Jasmine.png");
  confettiImg=loadImage("Images/star.png");
  congratsImg=loadImage("Images/congrats.png");

  coinSound=loadSound("Sounds/coin.mp3");
  dieSound=loadSound("Sounds/die.mp3");
  fireSound=loadSound("Sounds/fire.mp3");
  jumpSound=loadSound("Sounds/jump.mp3");
  resetSound=loadSound("Sounds/reset.mp3");
  winSound=loadSound("Sounds/win.mp3");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  edges=createEdgeSprites();

  //Start
  setStart();

  //Level 1
  setLevelOne();

  //Level 2
  setLevelTwo();

  //End
  setEnd();
}

function draw(){
  background("blue");
  drawSprites();

  if(gameState==="start"){
    startState();
  }

  if(gameState==="LevelOne"){
    playLevelOne();
  }

  if(gameState==="LevelTwo"){
    playLevelTwo();
  }

  if(gameState==="End"){
    endState();
  }

  if(gameState==="End2"){
    end2State();
  }

  if(gameState==="Win"){
    Win();
  }

}

function startState(){
  textSize(24);
  fill("yellow");
  stroke("orange");
  text("Welcome \n 1. Press the arrow keys to move Aladdin \n 2. Avoid the obstacles coming in your way");

  bg.visible=true;
  carpet.visible=true;
  genie.visible=true;
  aladdin.visible=true;
  playButton.visible=true;

  if(mousePressedOver(playButton)){
    resetSound.play();
    clear();
    gameState="LevelOne";
  }
}

function setStart(){
  bg=createSprite(width/2,height/2,width,height);
  bg.addImage(bgImg);
  bg.visible=false;

  carpet=createSprite(width/2-400,height/2+250);
  carpet.addImage(carpetImg);
  carpet.scale=0.8;
  carpet.visible=false;

  genie=createSprite(width/2+400,height/2);
  genie.addImage(genieImg);
  genie.scale=0.8;
  genie.visible=false;

  playButton=createSprite(width/2,height/2+125);
  playButton.addImage(playButtonImg);
  playButton.scale=0.8;
  playButton.visible=false;

  aladdin=createSprite(width/2-425,height/2);
  aladdin.addImage(aladdinImg);
  aladdin.scale=0.8;
  aladdin.visible=false;
}

function setLevelOne(){
  bg2=createSprite(width/2,height/2-350,width,height);
  bg2.addImage(bgImg2);
  bg2.scale=3.5;
  bg2.visible=false;

  carpet2=createSprite(width/2-650,height-50);
  carpet2.addImage(carpetImg);
  carpet2.scale=0.8;
  carpet.setCollider("rectangle",0,-30,carpet.width-100,carpet.height-300)
  carpet2.visible=false;

  aladdin2=createSprite(width/2-650,height-100);
  aladdin2.addImage(aladdinImg);
  aladdin2.scale=0.8;
  aladdin2.visible=false;

  invisibleGround=createSprite(width/2,height-30,width,30);
  invisibleGround.visible=false;

  rockGroup=new Group();
  rock2Group=new Group();
  coinGroup=new Group();
  }

  function playLevelOne(){
  
  }