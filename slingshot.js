class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 20
        }
        this.pointB = pointB
        this.bodyA=bodyA;
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(bodyA){
        this.sling.bodyA = bodyA;
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        if(this.sling.bodyA){
          line(this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y);
        }
        
    }
    
}