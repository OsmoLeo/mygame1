var ninja
var ground
var diesound;
var jumpsound;
var gameState = 'play';
var score=0;


function preload(){
  bg=loadImage("woods.jpg");
  ninja_img=loadAnimation("ninja1.png","ninja2.png","ninja3.png","ninja4.png")
  stone_img=loadImage("stone.png")
  diesound=loadSound("diesound.mp3")
  jumpsound=loadSound("jumpsound.mp3")
  fireball_img=loadAnimation("fireball1.png","fireball2.png","fireball3.png","fireball4.png")
  
}
  

function setup() {
  createCanvas(1700,400);
  ninja=createSprite(150,270,20,20)
  ninja.addAnimation("ninja",ninja_img);
  ninja.scale=0.5;
  ground=createSprite(850,380,1400,10);
}


function draw() {
  background(bg);
  if(keyDown('space')){
    fireball();
    

  }
  if(gameState === 'play' ){
    bg.velocityX=-10;
    fireball();
    stone();
    if(keyDown(UP_ARROW) && ninja.y > 203 ){
      ninja.velocityY=-10;
      jumpsound.play()
    }
      


      ninja.velocityY=ninja.velocityY+0.5; 
      ninja.collide(ground);
     if(ninja.x-stone.x < ninja.width/2 + stone.width/2
      && stone.x- ninja.x< ninja.width/2 + stone.width/2
      && ninja.y -  stone.y < ninja.height/2 + stone.height/2
      && stone.y - ninja.y < ninja.height/2 + stone.height/2){
        gameState ==='end';
        diesound.play()  
     }
  
     
  }
  if(gameState === 'end'){
    ninja.velocityX=0;
    stone.velocityX=0;
    ninja.velocityY=0;
    stone.velocityY=0;

  }
   

  ground.visible=false;
  
  drawSprites();
  textSize(22);
  text('SCORE'+score,800,20)
  
}
 


function stone(){
  if(World.frameCount%100===0){
  var stone=createSprite(1600,330,20,20)
  stone.addImage("stone",stone_img);
  stone.scale=0.3;
  stone.velocityX=-9;
  }
}
  

function fireball(){
  if(World.frameCount%100===0){
    var fireball=createSprite(150,270,10,10)
    fireball.addAnimation("fireball",fireball_img)
    fireball.velocityX=4;
  }
}
