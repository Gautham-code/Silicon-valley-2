var PLAY=1;
var END=0;
var gameState=PLAY;
//playSound("sound://category_background/repitition.mp3", false);
var ground;
var player;
var player_img;
var itemGroup;
var objectGroup;
var count=0;
var coin;
 var coin_img;

function preload(){
coin_img = loadImage("coin.jpeg");
 player_img = loadAnimation("ascreed1.tiff","ascreed2.tiff","ascreed3.tiff")


}
function setup(){
   ground = createSprite(200,400,400,10);
  //ground.setAnimation("last.png_1");

//ground.scale=2.0;
ground.x=ground.width/2;

 player = createSprite(50, 400,20,50);
player.addAnimation("player",player_img);
//player.scale=0.5;
itemGroup=new Group();
 objectGroup=new Group();

}




//player.setCollider("circle",0,0,40);

 





function draw() {
   background("white");
   //display score
   fill("purple");
   textSize(20);
   text("SCORE:"+count,40,35);
   
 
   player.collide(ground);
   
    if(gameState===PLAY){
      ground.velocityX=-6;
      //count=Math.round(World.frameCount/6);
       if(ground.x<0){
      ground.x=ground.width/2;
    }
    player.velocityY=player.velocityY+0.8;
   
   
    if(keyDown("space")){
        player.velocityY =-10;
       }
   if(player.isTouching(itemGroup)){
     itemGroup.destroyEach();
    // playSound("sound://category_pop/cute_water_bubble.mp3");
     count=count+1;
     }
     if(player.isTouching(objectGroup)){
       gameState=END;
       
     }
   coins();
   Obstacle();
  }
     else if(gameState===END){
       fill("purple");
       text("GAME OVER :(",100,200);
      // stopSound("sound://category_background/repitition.mp3");
       player.destroy();
      ground.velocityX=0;
      itemGroup.setVisibleEach(0);
     
     }
    createEdgeSprites();
  //  player.bounceOff(topEdge);
   // player.bounceOff(rightEdge);
   // player.bounceOff(leftEdge);
   // player.bounceOff(bottomEdge);
    drawSprites();
    }
function coins(){
 
  if(frameCount%50 === 0){
   var item=createSprite(202,263,40,10);
    item.addImage(coin_img);
   // item.setCollider("circle");
    item.scale=0.25;
    item.velocityX=-3;
   
    item.y=Math.round(random(200,250));
    item.lifetime=134;
    itemGroup.add(item);
     }
   
  }
function Obstacle(){
      if(frameCount%120===0){
    var object=createSprite(400,380,10,10);
    //object.setAnimation("ghost_1");
    object.scale=0.5;
    object.collide(ground);
    object.velocityX=-6;
    objectGroup.add(object);
    object.lifetime=70;
    }
}
