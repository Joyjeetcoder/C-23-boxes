class Ground{
    constructor(x,y,w,h){
        var options ={
            isStatic: true
        }
        this.g = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.g);
        this.width = w;
        this.height = h;
    }
    display(){
        rectMode(CENTER);
        fill("brown");
        rect(this.g.position.x,this.g.position.y,this.width,this.height);

    }
}