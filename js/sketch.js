let angle = 0;
let w = 24;
let ma;
let maxD;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
  ma = atan(1 / sqrt(2.5));
  maxD = dist(0, 0, 200, 200);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  background(86, 190, 178);

  ambientLight(255, 255, 255);
  stroke(86, 190, 178);
  strokeWeight(10);
  // noStroke();
  // orbitControl();
  // ortho(-430, 400, 400, -400, 0, 10000);

  rotateX(-QUARTER_PI);
  
  rotateY(QUARTER_PI * angle * 0.2);
  
  for (let z = 0; z < 500; z += w) {
    for (let x = 0; x < 500; x += w) {

      push();
      let d = dist(x, z, 500 / 2, 500 / 2);
      let offset = map(d, 0, maxD, -PI, PI);
      let a = angle + offset;
      let h = floor(map(sin(a), -1, 1, 100, 300));
      translate(x - 500 / 2, 0, z - 500 / 2);
      // normalMaterial();
      fill(h, 162, 161);
      box(w - 2, h, w);
      pop();
      fill(0);
    }
  }
  angle += 0.1;
}