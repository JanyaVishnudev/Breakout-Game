var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//CREATE FIRST ROW OF BOXES
var box1 = createSprite(25, 75, 50, 50);
var box2 = createSprite(75, 75, 50, 50);
var box3 = createSprite(125, 75, 50, 50);
var box4 = createSprite(175, 75, 50, 50);
var box5 = createSprite(225, 75, 50, 50);
var box6 = createSprite(275, 75, 50, 50);
var box7 = createSprite(325, 75, 50, 50);
var box8 = createSprite(375, 75, 50, 50);

//CREATE SECOND ROW OF BOXES
var box9 = createSprite(25, 125, 50, 50);
var box10 = createSprite(75, 125, 50, 50);
var box11 = createSprite(125, 125, 50, 50);
var box12 = createSprite(175, 125, 50, 50);
var box13 = createSprite(225,125, 50, 50);
var box14 = createSprite(275, 125, 50, 50);
var box15 = createSprite(325, 125, 50, 50);
var box16 = createSprite(375, 125, 50, 50);

//ADDING FIRST ROW OF SHAPE COLOR
box1.shapeColor="#DF6868";
box2.shapeColor="#D45262";
box3.shapeColor="#DF6868";
box4.shapeColor="#D45262";
box5.shapeColor="#DF6868";
box6.shapeColor="#D45262";
box7.shapeColor="#DF6868";
box8.shapeColor="#D45262";

//ADDING SECOND ROW OF SHAPE COLOR
box9.shapeColor="#D45262";
box10.shapeColor="#DF6868";
box11.shapeColor="#D45262";
box12.shapeColor="#DF6868";
box13.shapeColor="#D45262";
box14.shapeColor="#DF6868";
box15.shapeColor="#D45262";
box16.shapeColor="#DF6868";

//ADDING PADDLE AND BALL
paddle=createSprite(200,390,100,20)
ball=createSprite(200,200,20,20)

//ADDING COLOR TO PADDLE AND BALL
paddle.shapeColor="#E17575";
ball.shapeColor="#F89898";

//CREATING SCORE
var score = 0

//CREATING STATES
var gameState = "serve"

//FUNCTION DRAW
function draw() {
  background("#F0BBB0");
  
//CODING FOR SERVE STATE
if (gameState === "serve") {
fill("#E17575")
textSize(20);
text("PRESS ENTER TO START GAME", 50,250)  
}

//CODING FOR PLAY STATE
if (gameState === "play") {
paddle.x= World.mouseX
if (score===80){
gameState="win"
}
if (ball.isTouching(bottomEdge)){
gameState="end"
}
}  

//CODING FOR END STATE
if (gameState === "end") {
fill ("#E17575")
textSize(30);
text ("GAME OVER", 200,200)
box1.visible = false
box2.visible = false
box3.visible = false
box4.visible = false
box5.visible = false
box6.visible = false
box7.visible = false
box8.visible = false
box9.visible = false
box10.visible = false
box11.visible = false
box12.visible = false
box13.visible = false
box14.visible = false
box15.visible = false
box16.visible = false
}  

//CODING FOR WIN STATE
if (gameState === "win") {
fill ("#E17575")
textSize(30);
text ("YOU WIN", 200,200)
box1.visible = false
box2.visible = false
box3.visible = false
box4.visible = false
box5.visible = false
box6.visible = false
box7.visible = false
box8.visible = false
box9.visible = false
box10.visible = false
box11.visible = false
box12.visible = false
box13.visible = false
box14.visible = false
box15.visible = false
box16.visible = false
}  
  
  //ADDING VELOCITY TO BALL
  if (keyDown(ENTER)) {
  ball.setVelocity(5,-5)
  gameState="play"
  }
  
  //CODE FOR EDGES
  createEdgeSprites();
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(topEdge);
  ball.bounceOff(paddle);
 
 
 //ADDING TEXT
 textFont("Arial");
 textSize(20);
 fill("#E17575");
 text("SCORE:"+score, 0, 18);
 
  
  //DESTROYING BOXES AND SCORES
 if (ball.isTouching(box1)) {
 box1.destroy();
 score = score+5
  }
  
  if (ball.isTouching(box2)) {
 box2.destroy();
  score = score+5
  }
  
  if (ball.isTouching(box3)) {
 box3.destroy();
  score = score+5
  }
  
  if (ball.isTouching(box4)) {
 box4.destroy();
  score = score+5
  }
  
  if (ball.isTouching(box5)) {
 box5.destroy();
  score = score+5
  }
  
  if (ball.isTouching(box6)) {
 box6.destroy();
  score = score+5
  }
  
  if (ball.isTouching(box7)) {
 box7.destroy();
  score = score+5
  }
  
  if (ball.isTouching(box8)) {
 box8.destroy();
  score = score+5
  }
  
  if (ball.isTouching(box9)) {
 box9.destroy();
  score = score+5
  }
  
  if (ball.isTouching(box10)) {
 box10.destroy();
  score = score+5
  }
  
  if (ball.isTouching(box11)) {
 box11.destroy();
  score = score+5
  }
  
  if (ball.isTouching(box12)) {
 box12.destroy();
  score = score+5
  }
  
  if (ball.isTouching(box13)) {
 box13.destroy();
  score = score+5
  }
  
  if (ball.isTouching(box14)) {
 box14.destroy();
  score = score+5
  }
  
  if (ball.isTouching(box15)) {
 box15.destroy();
  score = score+5
  }
  
  if (ball.isTouching(box16)) {
 box16.destroy();
  score = score+5
  }
  
  drawSprites();
}




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
