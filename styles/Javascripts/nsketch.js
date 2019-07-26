/*
Name:  Denzell Devonte Dixon

Date: march 23rd, 2019 

Program Name: Explosion Animation

Program Description: This animation of explosions using 
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


function setup(){
    let myCanvas = createCanvas(windowWidth,windowHeight);
    myCanvas.parent('animation');
    W = width;
    H = height; 
}

let explosions = [];

// I to create one random color rather than numbers. But, it's alright.
/* 
let colors = ["fuchia", "red", "blue", "orange", "green", "purple", "grey", "white"];
let explosionC= colors[colorNumber];
*/

function draw(){
    background(255);

    if (frameCount % 60 == 0){ //Every like 2 seconds
        let explosionX = random(width); //random rumber;
        let explosionY = random(height); //random rumber;  
        explosions.push(new Explosion(explosionX, explosionY));  
    }
    
    //Exploding 
    for (const boom of explosions){
         boom.explode();
    }
    
}


