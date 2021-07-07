var hr,mn,sc 
var hrangle, mnangle, scangle


function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
}

function draw() {
  background("lime");  
  translate(200,200);
  rotate(-90);

  hr=hour();
  mn=minute();
  sc=second();
  scangle=map(sc,0,60,0,360);
  mnangle=map(mn,0,60,0,360);
  hrangle=map(hr%12,0,12,0,360);

  push()
  rotate(scangle)
  stroke("yellow")
  strokeWeight(7);
  line(0,0,100,0);
  pop()

  push()
  rotate(mnangle)
  stroke("orange")
  strokeWeight(7);
  line(0,0,75,0);
  pop()

  push()
  rotate(hrangle)
  stroke("cyan")
  strokeWeight(7);
  line(0,0,50,0);
  pop()

  stroke("yellow")
 strokeWeight(9)
  point(0,0);

  strokeWeight(10);
noFill()
  stroke("yellow")
arc(0,0,300,300,0,scangle);
stroke("orange")
arc(0,0,260,260,0,mnangle);
stroke("cyan")
arc(0,0,220,220,0,hrangle);







}