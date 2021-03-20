class Mango{
    constructor(x,y,r){
    
       var mangoOptions = {
           isStatic: true,
           restitution: 0.3,
           friction: 0.5,
           density: 3    
       }
    
       this.x = x;
       this.y = y;
       this.r = r;
       this.body = Bodies.circle(this.x,this.y,this.r/2,mangoOptions);
       this.image = loadImage("mango.png");
       
       
    
       World.add(world,this.body);
    
    
    
    }
    
        display(){
    
        var mangopos  = this.body.position;
    
        push();
        translate(mangopos.x,mangopos.y); 
        rectMode(CENTER); 
        strokeWeight(3); 
        fill(255,0,255);
        image(this.image,0,0,this.r,this.r); 
        pop(); 
    
    }
    }