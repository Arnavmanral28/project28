class Stone{
    constructor(x,y,r){
    
       var stoneOptions = {
           isStatic: false,
           restitution: 0.3,
           friction: 0.5,
           density: 3    
       }
    
       this.x = x;
       this.y = y;
       this.r = r;
       this.body = Bodies.circle(this.x,this.y,this.r/2,stoneOptions);
       this.image = loadImage("stone.png");
       
       
    
       World.add(world,this.body);
    
    
    
    }
    
        display(){
    
        var stonepos  = this.body.position;
    
        push();
        translate(stonepos.x,stonepos.y); 
        rectMode(CENTER); 
        strokeWeight(3); 
        fill(255,0,255);
        image(this.image,0,0,this.r,this.r); 
        pop(); 
    
    }
    }