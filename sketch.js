// Examples on different data types in JavaScript:

// 1) String:
// String: These are sequences of characters stored inside quotes.  
var string = "Greetings!"
console.log(string);

// 2) Number: Any mathematical number. 
var num = 28;
console.log(num);

//'Boolean values: True and false values.
var boolean = true;
console.log(boolean);

// Undefined: It means that no value has been assigned to a variable.
var object;
console.log(object);

// Null: It means nothing or empty.
var object = null;
console.log(object);

// An Array holding same data type: 
var arr1 = [1,2,3,4,5,6,7];
console.log(arr1);

// An array holding different data types:
var arr2 = ["Bhargavi",28,true];
console.log(arr2);

// An array storing list of arrays:
var arr3 = [[2000,1986],["Bhargavi","Shinde"],[true,false],[1,3,5,7,9]];
console.log(arr3[0][1]);

// Pushing a new value in an array = array.push();
// Removing the last values from an array = array.pop();

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if(gameState !== "launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    gameState = "launched";
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        //slingshot.attach(bird.body);
    }
}