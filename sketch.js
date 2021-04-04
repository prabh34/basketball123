var canvas;
var music;
var movingbox;
var f1,f2,f3,f4;
var po1,po2;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    f1 = createSprite(100,590,180,20);
    f1.shapeColor = "green";
    f2 = createSprite(300,590,180,20);
    f2.shapeColor = "green";
    f3 = createSprite(500,590,180,20);
    f3.shapeColor = "green";
    f4 = createSprite(700,590,180,20);
    f4.shapeColor = "green"; 





    //create box sprite and give velocity
    movingbox = createSprite(random(20,750),300,20,20);
    movingbox.velocityX= 3;
    movingbox.velocityY= 3;
    movingbox.shapeColor= "pink";


}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites ();
    movingbox.bouceOff(leftEdge);
    movingbox.bounceOff(rightEdge);
    movingbox.bounceOff(topEdge);

    



    //add condition to check if box touching surface and make it box

    if(f1.isTouching(movingbox) && movingbox.bouceOff(f1)) {
        f1.shapeColor= "blue";
        movingbox.shapeColor= "blue";
        music.play();
        

    }
    else{
        f1.shapeColor= "green";
        movingbox.shapeColor= "pink"
    }

    if (f2.isTouching(movingbox) && movingbox.bouceOff(f2)) {
        f2.shapeColor= "yellow";
        movingbox.shapeColor= "yellow";
        movingbox.velocityX= 0;
        movingbox.velocityY= 0;
        music.stop();
    }
    else{

        f2.shapeColor= "yellow";
        movingbox.shapeColor= "yellow"

    }

    if (f3.isTouching(movingbox) && movingbox.bouceOff(f3)) {
        f3.shapeColor= "maroon";
        movingbox.shapeColor= "maroon";
    }
    else {

        f3.shapeColor= "green";
        movingbox.shapeColor= "pink"


    }

    if (f4.isTouching(movingbox) && movingbox.bouceOff(f4)) {
        f4.shapeColor= "brown";
        movingbox.shapeColor= "brown";
    }
    else {

        f4.shapeColor= "green";
        movingbox.shapeColor= "pink"


    }


    drawSprites();
}

function bouceOff(po1,po2) {
if (po1.isTouching(po2) && po2.bouceOff(po1)){
    return true;

}
else{

    return false;
}
        
}

function isTouching(po1,po2) {
    
   if (po1.x - po2.x < po2.width/2 + po1.width/2
        && po2.x - po1.x < po2.width/2 + po1.width/2
        && po1.y - po2.y < po2.height/2 + po1.height/2
        && po2.y - po1.y < po2.height/2 + po1.height/2) {
        return true;
}
 else{
     
    return false; 
 }
    
}
