class Ball {
    constructor(x,y) {
      var options = {
          restitution: 0.8
          
        }
      
      this.body = Bodies.circle(x,y,9,options);
      this.radius = 9;
      this.color = color(random(0,255),random(0,255),random(0,255))
      World.add(world, this.body);
    }
   
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill(this.color);
      ellipse(pos.x, pos.y, this.radius,this.radius);
    }
  };