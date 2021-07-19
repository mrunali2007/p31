class Particle{
    constructor(x,y) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(x,y,this.r,options);
      World.add(world, this.body);
      this.r = 10;
      this.color = color(random(0,255)), random(0,255), random(0,255);
      
    }
    display(){
      var pos =this.body.position;
      push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill("white");
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop();
    }
  };