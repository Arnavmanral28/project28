class Boy{
    constructor(x,y,width,height){
        var boyOptions={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,boyOptions);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
        this.image = loadImage("boy.png")


    }

    display(){

        var pos = this.body.position; 
        push();
        rectMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop();

    }
}