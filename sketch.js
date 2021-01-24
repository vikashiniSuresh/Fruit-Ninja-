var PLAY=1;
var END=0;
var gameState=1;
var score;
var swordImage, sword;
var fruitsGroup;
var enemyGroup; 

function preload(){
  //load image files in this function
 swordImage = loadImage("sword.png"); 
 fruit1 = loadImage("fruit1.png");
 fruit2 = loadImage("fruit2.png");
 fruit3 = loadImage("fruit3.png");
 fruit4 = loadImage("fruit4.png");
 monsterImage = loadImage("alien1.png");
}

function setup(){
  
// create common sprites in this function  
sword=createSprite(40,200,20,20)
sword.addImage(swordImage);
sword.scale=0.7

//create/define Groups below
  fruitsGroup = createGroup();
  enemyGroup = createGroup();
}

function draw(){
background("white");
// Move sword with mouse
  // W of world should be capital
  sword.y = World.mouseY;
  sword.x = World.mouseX;
  
  //increase score if touching the fruit
  if(fruitsGroup.isTouching(sword)){
    fruitsGroup.destroyEach();
    score=score + 2 
  }
  
  //call fruits and Enemy function 
  fruits();
  enemy();
  drawSprites();
}

//code for spawning fruit
function fruits(){
  if(World.frameCount%80===0){
    fruit=createSprite(400,200,20,20)
    fruit.scale=0.2;
    //fruit.debug=true;
    r=Math.round(random(1,4));
  if (r==1){
    fruit.addImage(fruit1);
  } else if (r==2){
    fruit.addImage(fruit2);
  }else if (r==3){
    fruit.addImage(fruit3);
  }else{
     fruit.addImage(fruit4);
  }
  fruit.y=Math.round(random(50,340));
    
    fruit.velocityX=-7
    fruit.setLifetime=100;
    
    fruitsGroup.add(fruit);
    
  }
}

// function name should be in camelCase
function enemy(){
  if(World.frameCount%200===0){
    monster=createSprite(400,200,20,20);
    monster.addAnimation("moving",monsterImage);
    monster.y=Math.round(random(100,300));
    monster.velocityX=8
    monster.setLifetime=50;
    enemyGroup.add(monster);
    
  }
}

