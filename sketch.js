var ball;

var databas 
function setup(){
    createCanvas(500,500);

    database =firebase.database();

    var loc =database.ref("Ball/Position");
    loc.on("value",readOp,showErr);


    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}
function readOp(data){
    position=data.val();
    ball.x=position.x;
    ball.y=position.y;
}
function showErr(){
    console.log();
}
function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
   /* ball.x = ball.x + x;
    ball.y = ball.y + y;*/
    var ref=database.ref("Ball/Position");
    ref.set({
        x:position.x+x,
        y:position.y+y
    })
}
