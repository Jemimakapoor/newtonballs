class Rope{
    constructor(body1,body2,xoffset){
           
           var options={
         
            bodyA:body1,
            bodyB:body2,
            length:250,
           
            
        }
        this.rope=Constraint.create(options)
        
        World.add(world,this.rope)
        this.xoffset=xoffset
    }
    display(){
        strokeWeight(3)
        stroke("purple")
       
       var pointA=this.rope.bodyA.position;
       var pointB=this.rope.bodyB.position;
       
       line(pointA.x,pointA.y,pointB.x+this.xoffset,pointB.y)
        
    }
}