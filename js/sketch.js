let spheres = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();

  for (let i = 0; i < 30; i++) {
    spheres.push(new Sphere(random(-width/2,width/2),random(-height/2,height/2), random(-3, 3), random(-3, 3), random(width*0.08, width*0.01)));
  }
}

function draw() {
  background(255);
  
 let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
 ambientLight(100,150,100);
  spotLight(100, 255, 100, locX, locY, 100, 0, 0, -1, Math.PI ,10/map(width,0,width,0,5);
    // rotateY(millis() / 1000);

  for (let i = 0; i < spheres.length; i++) {
    spheres[i].update();
    spheres[i].draw();
  }

}

class Sphere {

  constructor(x, y, speedx, speedy, r) {
    this.x = x;
    this.y = y;
    this.speedx = speedx;
    this.speedy = speedy;
    this.r = r;
  }

  update() {
    this.x += this.speedx;
    this.y += this.speedy;

    if (this.x+this.r > width / 2 || this.x+this.r < -width / 2) {
      this.speedx *= -1;
    }
    if (this.y+this.r > height / 2 || this.y+this.r< -height / 2) {
      this.speedy *= -1;
    }
  }

  draw() {
    push();
    translate(this.x, this.y);
    sphere(this.r);
    pop();

  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
