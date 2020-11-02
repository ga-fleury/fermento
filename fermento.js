window.setup = function setup() {

}

window.draw = function draw() {
  createCanvas(1000, 1000);


  let center = createVector(width / 2, height / 2);
  let colors = ['#0F8FE6', '#ff7b00', '#AB76FF', '#FFEA00', '#F53800', '#06CBAD' ]
  strokeWeight(7);
  angleMode(DEGREES);
  noFill();
  let a = round(random(0,36))*10;
  let b = round(random(0,36))*10;
  let c = round(random(0,36))*10;
  let d = round(random(0,36))*10;
  let e = round(random(0,36))*10;
  let f = round(random(0,36))*10;
  let g = round(random(0,36))*10;
  let h = round(random(0,36))*10;
 
  
  // remove elementos da array colors até só sobrarem 4
  for (var i = 0; i < 2; i++) {
    let colorPicker = round(random(0, colors.length-1));
    colors.splice(colorPicker, 1);
  }
  
  // embaralha a array colors
  for (var i = colors.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = colors[i];
    colors[i] = colors[j];
    colors[j] = temp;
  }
  
  
  
  translate(center.x, center.y)
  scale(4)
  
  rotate(a);

  //yellow
  stroke(colors[0]);
  
  //outline
  arc(0, 0, 170, 170, 0, 90);
  arc(0, 0, 110, 110, 0, 90);
  
  //fill
  strokeWeight(24);
  arc(0, 0, 140, 140, 0, 90);
  
  //caps
  fill(colors[0])
  strokeWeight(7);
  
  arc(0, 0 +70, 30, 30, 90, 270);
  arc(0 +70, 0, 30, 30, 180, 0);
  
  noFill();
  
  rotate(b);
  
  //purple
  stroke(colors[1]);
  
  
  arc(0, 0, 170, 170, 180, 270);
  arc(0, 0, 110, 110, 180, 270);
  
  strokeWeight(24)
  arc(0, 0, 140, 140, 180, 270);
  
  strokeWeight(7);
  fill(colors[1]);
  arc(0, 0 -70, 30, 30, 270, 90);
  arc(0 -70, 0, 30, 30, 0, 180);
  
  noFill();
  
  rotate(c);
  

  // blue full
  fill(colors[2]);
  stroke(colors[2]);
  ellipse(0, 0 + 10, 30, 30);

  rotate(d);

  // blue stroke
  noFill();
  ellipse(0 + 70, 0 + 70, 25, 25);


  rotate(e);

  arc(0, 0, 200, 200, 90, 180);
  arc(0, 0, 140, 140, 90, 180);
  arc(0, 0 + 85, 30, 30, 270, 90);
  arc(0 - 85, 0, 30, 30, 180, 0);


  rotate(f);

  fill(colors[3]);
  stroke(colors[3]);
  ellipse(0-40, 0-100, 12,12)
  

  rotate(g);  
  
  noFill();
  ellipse(0 + 50, 0, 50, 50);


  rotate(h);


  arc(0, 0, 200, 200, 270, 0);
  arc(0, 0, 140, 140, 270, 0);
  arc(0, 0 - 85, 30, 30, 90, 270);
  arc(0 + 85, 0, 30, 30, 0, 180);
  
  noLoop();

}

window.mouseClicked = function mouseClicked(){
  noCanvas();
  redraw();
}

window.keyPressed = function keyPressed() {
  if (keyCode === BACKSPACE){
    saveCanvas('myCanvas', 'png');
  }
}