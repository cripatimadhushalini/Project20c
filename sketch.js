var cat,catImg,cat2Img,cat3Img;
var mouse,mouse2Img,mouse3Img,mouse4Img
var ground,groundImg;

function preload() {
    groundImg = loadImage("images/garden.png");
    catImg = loadAnimation("images/cat1.png");
    cat2Img = loadAnimation("images/cat2.png","images/cat3.png");
    cat3Img = loadAnimation("images/cat4.png");

    mouse2Img = loadAnimation("images/mouse1.png");
    mouse3Img = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse4Img = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    cat = createSprite(950,600);
    cat.addAnimation("1Img",catImg);
    cat.scale = 0.2;
    cat.debug = true;

    mouse = createSprite(100,600);
    mouse.addAnimation("2Img",mouse2Img);
    mouse.debug = true;
    mouse.scale = 0.2;
}

function draw() {
    background(groundImg);

    if(cat.width/2 + mouse.width/2 <= ( cat.width/2 - mouse.width))
    {
        cat.velocityX = 0;
        cat.addAnimation("3Img",cat3Img);
        cat.x = 300;
        cat.scale = 0.2;
        cat.changeAnimation("3Img");

        mouse.addAnimation("4Img",mouse4Img);
        mouse.scale = 0.15;
        mouse.changeAnimation("4Img");
      
    }

    keyPressed();
    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("2Img",cat2Img)
        cat.changeAnimation("2Img");
        mouse.addAnimation("3Img",mouse3Img);
        mouse.frameDelay = 25;
        mouse.changeAnimation("3Img");
    }
}
