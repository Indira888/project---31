class Particle{
    constructor(){
        var opt={
            density:5
        }
        this.body = Bodies.circle(random(width/2-10,width/2+10),10,10,opt);
        this.x = random(width/2-10,width/2+10);
        this.r = 10;
        this.colour = color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill(this.colour);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}