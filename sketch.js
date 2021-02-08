var cat,catImg,catImg2,catImg3;
var mouse,mouseImg,mouseImg2;
var garden,gardenImg;

function preload() {
    gardenImg = loadImage("garden.png");
    catImg = loadImage("cat1.png");
    catImg2 = loadAnimation("cat2.png","cat3.png");
    catImg3 = loadImage("cat4.png")
    mouseImg3 = loadImage("mouse3.png");
    mouseImg = loadImage("mouse4.png");
    mouseImg2 = loadImage("mouse2.png");



}

function setup(){
    createCanvas(500,360);
    //create tom and jerry sprites here
    garden = createSprite(5,8,10,10);
    garden.addImage(gardenImg);
    garden.scale = 1;

    cat = createSprite(350,270,10,10);
    cat.addImage(catImg);
    cat.scale = 0.1;

   mouse = createSprite(40,270,10,10);
   mouse.addImage(mouseImg3)
   mouse.scale = 0.06;

}

function draw() {
 
    background(225);
    if(cat.x === 105 ){
        cat.velocityX = 0;
        cat.addAnimation("catSitting",catImg3);
        cat.changeAnimation("catSitting");
        mouse.addAnimation("mouseSitting",mouseImg);
        mouse.changeAnimation("mouseSitting");
     
    }
   

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("catRunning",catImg2);
    cat.changeAnimation("catRunning");
}


}
