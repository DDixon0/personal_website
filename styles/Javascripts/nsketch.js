/*
Name:  Denzell Devonte Dixon

Date: march 23rd, 2019 

Program Name: Explosion Animation

Program Description: This animation of explosions using 
p5.js.
*/


//Explosion class
class Exploion{
    constructor(x, y, color){
    this.x = x;
    this.y = y;
    this.color = color;
    this.lifespan = 0;
    }
    explode(){
        
        //fill(this.color); I want to add opacity so I will hard code this part
        let c = color(255, 0, 0, 255 - 4.25*this.lifespan);
        fill(c);
        ellipse(this.x, this.y, this.lifespan/1.5, this.lifespan/1.5);
        this.lifespan+= 2;

        if (this.lifespan >= 60){
            explosions.splice(0,1);
        }
    }
    
}


function setup(){
    let myCanvas = createCanvas(windowWidth,windowHeight);
    myCanvas.parent('animation');
    background(0,0,0);
    W = width;
    H = height; 
}

let explosions = [];

function draw(){
    background(0,0,0);
    if (frameCount % 60 == 0){ //Every like 2 seconds
        let explosionX; //random rumber;
        let explosionY; //random rumber;
        let explosionC; //array of random colors that math th color pallet
        explosions.push(new Exploion(explosionX, explosionY, explosionC));  
    }
    
    //Exploding 
    for (const boom of explosions){
         boom.explode();
    }
    
}


