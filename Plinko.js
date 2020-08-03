class Plinko{

    constructor(x,y,r){
    var options=
    {
       
       restitution:1,
			friction:0,
			density:0.8



    }
     this.x=x;
		this.y=y;
        this.r=r; 

       
    this.body = circle(x,y,r,options);
   
    

    

    }
 
    display() {
   
    push();
    translate(pos.x,pos.y);
    ellipseMode(RADIUS);
    fill("blue");
    ellipse(0,0,this.r,this.r);
    pop();

    }
}
    