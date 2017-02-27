function setup() {
  
  createCanvas(800,800);
  frameRate(20)

}

function draw() {
background("#ff628c"); 
if (random()< 0.5){
  fill( lerpColor( color('#ea0043'), color('#0fefca'), (frameCount)/120) );
  noStroke(); } else {
    fill("#ffed62");
  }
  
 for(var y=0; y<820; y+=40){
    for(var x=0; x<820; x+=20){
      triangle(x,y, x+20, y, x+10, y+20);  }  }


  fill( lerpColor( color('#ea0043'), color('#0fefca'), (frameCount)/120) );
  noStroke(); 
    fill("#ffed62");
  

  for(var Y=0; Y<820; Y+=40){
    for (var X=0; X<820; X+=20){
      triangle(X-10, Y+20, X+10, Y+20, X+0, Y+40); } }
      
      
textAlign(CENTER);
textSize(24);
noStroke()
fill(0);
text("To prevent an epilettic attack click anywhere", windowWidth/2, windowHeight/2);


if (mouseIsPressed){
    fill("#0fefca");
    rect(0, 0, windowWidth, windowHeight);}
    



}

