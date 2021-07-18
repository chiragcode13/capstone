class Rope {
 constructor(bodyA,pointB){
     var options={
    length:200,
    stiffness:0.3,
    bodyA:bodyA,
    pointB:pointB

   }
    this.rope= Constraint.create(options)
    this.pointB=pointB
     World.add(world,this.rope)

 }
 
 display(){

 var pointA=this.rope.bodyA.position;
 var pointB=this.pointB
push();
line(pointA.x,pointA.y,pointB.x,pointB.y);
pop();


 }

}
