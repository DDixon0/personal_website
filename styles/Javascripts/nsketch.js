/*
Name:  Denzell Devonte Dixon

Date: July 26, 2019

Program Name: Transit Logo Name

Program Description: This animation of for my personal website. It will be the transit logo using
p5.js.
*/


//Explosion class
class Explosion{
    constructor(x, y){
    this.x = x;
    this.y = y;
    this.lifespan = 1;
    this.colorR = random(255);
    this.colorG = random(255);
    this.colorB = random(255);
    }
    explode(){
        // console.log("color");
        // console.log(this.colorB);
        // console.log(this.colorG);
        // console.log(this.colorR);
        
        
        //fill('rgb(this.colorR, this.colorG, this.colorB)'); //I want to add opacity so I will hard code this part
        let c = color(this.colorR, this.colorG, this.colorB, 255*this.lifespan);
        fill(c);

        if (this.lifespan <= 0){ // Cahnge this number to extended or shorten life
            explosions.splice(0,1);
        }
        noStroke();
        ellipse(this.x, this.y, 10* (1/this.lifespan), 10* (1/this.lifespan));
        this.lifespan-= 0.001;// Cahnge this number to extended or shorten life
    }
    
}

let W, H;

function preload(){
    //load a font from a server
    //have a backup font if anything
}


function setup(){
    let myCanvas = createCanvas(windowWidth,windowHeight);
    myCanvas.parent('animation');
    W = width;
    H = height; 

    //textFont("Loaded font from server")
    textSize(125);
    textAlign(CENTER, CENTER);
}

let explosions = [];

// I to create one random color rather than numbers. But, it's alright.
/* 
let colors = ["fuchia", "red", "blue", "orange", "green", "purple", "grey", "white"];
let explosionC= colors[colorNumber];
*/

function draw(){
    background(255);

    //array of colors
    let characterColors =["Orange", "Blue", "Yellow", "Brown", "Blue", "Grey", "Grey"];
    let characterName = ["D","E","N","Z","E","L","L"];

    for(let i = 0;  i <characterColors.length; i++){
        let xShift = W* 0.75;
        let plusShift = W*0.125;
        let xPos = (xShift/(characterColors.length-1) * i)+ plusShift;
        let yPos = H/2;
        noStroke();
        fill(characterColors[i]);
        ellipse(xPos, yPos, 150, 150);
        fill("white");
        text(characterName[i],xPos,yPos);
    }


    //Movement for trains
    // if (frameCount % 60 == 0){ //Every like 2 seconds
    //     let explosionX = random(width); //random rumber;
    //     let explosionY = random(height); //random rumber;  
    //     explosions.push(new Explosion(explosionX, explosionY));  
    // }
    
    
    
}


