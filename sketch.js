var startGamebackground
var gameState
var startGamebutton
function preload(){
    startGamebackground = loadImage("images/startgameback.png", 1000, 1000)
    startGamebimg = loadAnimation("images/start.png","images/start.png", "images/blank.png","images/blank.png", "images/blank.png" )
}
function setup(){
    canvas = createCanvas(1000, 1000);
    gameState = "start"
    
    startGamebutton = createSprite(500,500,1,1);
    startGamebutton.addAnimation("startbutton", startGamebimg)

}
function draw(){
    if(gameState === "start"){
    background(startGamebackground);
    drawSprites();
    if(mousePressedOver(startGamebutton)){
        console.log("worked")
    }
    }
}
