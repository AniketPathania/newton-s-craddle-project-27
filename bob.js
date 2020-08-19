class Bob{
    constructor(x,y,radius){
        this.x = x;
        this.y = y;
        this.radius = radius;

        var options ={
            isStatic:false,
            restitution:1.1,
            friction:0.5,
            density:1.0
        }
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
    }
  display(){

      var pos = this.body.position;
      fill("green");
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y,this.radius,this.radius);
  }

    
}