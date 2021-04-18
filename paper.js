class paper {
	constructor()
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2			
			}
		
		this.body=Bodies.circle(200, 600, 20, options);
        this.image=loadImage("paper.png");
 		World.add(world, this.body);

	}
	display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			imageMode(CENTER)
            image(this.image, 0, 0, 60, 60);
			//strokeWeight(4);
			pop()
			
	}

}
function keyPressed() {
    if(keyCode == UP_ARROW) {
        Matter.Body.applyForce(paperobj.body, paperobj.body.position,{x:85, y:-110});
    }
}