var database , mainPage , childSide , parentSide;
var bgImg;
function preload(){
bgImg = loadImage('acces/bg.jpg')
}

function setup(){
 canvas = createCanvas(displayWidth , displayHeight);
 database = firebase.database();
 mainPage = new mainP;
}

function draw(){
background(bgImg);
 database = firebase.database();
 mainPage.display();
}
//accesories function