//declear the variables for hour ,min,sec
var hr,mn,sc;
//for three hands we need angles
var hrangle,mnangle,scangle;

function setup() {
  createCanvas(400,400);
 //change the angle mode to degree
 angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  //translate and rotate for the hands
  translate(200,200);
  rotate(-90);
//calculate the hour, min,sec so create function
hr=hour();
mn=minute();
sc=second();
//to create iterative rotation
scangle=map(sc,0,60,0,360);
mnangle=map(mn,0,60,0,360);
hrangle=map(hr%12,0,12,0,360);
//drawing the second hand
push();
rotate(scangle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
pop();
//drawing the minute hand
push();
rotate(mnangle);
stroke(0,255,0);
strokeWeight(7);
line(0,0,75,0);
pop();
//drawing hour hand
push();
rotate(hrangle);
stroke(0,0,255);
strokeWeight(7);
line(0,0,50,0);
pop();
//draw the arcs
strokeWeight(10);
noFill();

//second
stroke(255,0,0)
arc(0,0,300,300,0,scangle);

//minute
stroke(0,255,0);
arc(0,0,280,280,0,mnangle);

//hour
stroke(0,0,255);
arc(0,0,260,260,0,hrangle);
}




