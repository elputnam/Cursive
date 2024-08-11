let face1 = [];
let face2 = [];
let hue1 = 0;


let tileCount;
// let tileX;
// let tileY; 
// let divid;

//CCapture
// var capture = false; // default is to not capture frames, can be changed with button in browser
// var capturer = new CCapture({
//   format:'webm', 
//   workersPath: 'js/',
//   framerate: 15
// });

function preload(){
  for (let i = 1; i < 207; i++){
    face1[i] = loadImage("data/out" + i + ".png");
  }
  for (let i = 1; i < 135; i++){
    face2[i] = loadImage("data/put" + i + ".png");
  }
}

function setup() {
  createCanvas(1920, 1080);
  colorMode(HSB, 360, 100, 100, 100);
  frameRate(25);
  tileCount = 10;
  // tileX = 20
}

function draw() {
  background(0);
  // if (frameCount==1){
  //   capturer.start();
  // };

  //Terra dance
  let num1 = int(random(1, face1.length));
  //tint(255, random(50,100));
  image(face1[num1], 0, 0, 1920, 1080);
  hue1 = random(180);

 grid();
    if (frameCount%10==0){
    //tileCount = random(10, 50);
  }

 
  let num2 = int(random(1, face2.length));
  face1[num1].filter(GRAY);
  blend(face2[num2], 0, 0, width, height, random(-5,5), random(-5,5), width, height, DARKEST); 

 

  // capturer.capture(document.getElementById('defaultCanvas0'));  
  // if (frameCount==2200){
  //   save_record();
  //}
  print(frameCount);
}

// function save_record() {
//   capturer.save();
// }

function grid(){
  for (let gridY = 0; gridY < tileCount; gridY++) {
    for (let gridX = 0; gridX < tileCount; gridX++) {
      let posX = (width / tileCount) * gridX;
      let posY = (width / tileCount) * gridY;
      noStroke();
      rectMode(CORNER);
      //fill(0);
      //rect(posX, posY, width/tileCount, height/tileCount);
      
     //if (frameCount%5==0){
      var toggle = floor(random(2));
      if (toggle == 1){
         fill(0, 0);
          rect(posX, posY, width/tileCount, width/tileCount);
    } else {
      fill(255) ;
      rect(posX, posY, width/tileCount, width/tileCount);
      }
     }
    //}
    }
}

function mousePressed(){
  let fs = fullscreen();
  fullscreen(!fs);
}