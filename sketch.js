// Flow Field background with random color-changing particles on click and attraction to the cursor using p5.js

let numParticles = 2000;
let noiseScale = 500;
let noiseStrength = 1;
let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle(createVector(random(width * 1.2), random(height)), createVector(0, 0), random(0.5, 2)));
  }
}

function draw() {
  background(0, 5);
  particles.forEach(particle => {
    particle.move();
    particle.checkEdges();
    particle.update();
  });
}

function mouseClicked() {
  particles.forEach(particle => {
    particle.changeColor();
  });
}

class Particle {
  constructor(loc, dir, speed) {
    this.loc = loc;
    this.dir = dir;
    this.speed = speed;
    this.color = color(255);
  }

  move() {
    let angle = noise(this.loc.x / noiseScale, this.loc.y / noiseScale, frameCount / noiseScale);
    angle = map(angle, 0, 1, 0, TWO_PI * noiseStrength);
    let noiseVector = createVector(cos(angle), sin(angle));
    
    // Calculate the attraction force towards the cursor
    let attraction = p5.Vector.sub(createVector(mouseX, mouseY), this.loc);
    attraction.setMag(0.6); // Adjust the attraction strength here
    
    this.dir = p5.Vector.add(noiseVector, attraction).normalize();
    this.loc.add(this.dir.mult(this.speed));
  }

  checkEdges() {
    if (this.loc.x < -width * 0.1 || this.loc.x > width * 1.1 || this.loc.y < -height * 0.1 || this.loc.y > height * 1.1) {
      this.loc.x = random(width * 1.2);
      this.loc.y = random(height);
    }
  }

  update() {
    fill(this.color);
    ellipse(this.loc.x, this.loc.y, 2);
  }

  changeColor() {
    this.color = color(random(255), random(255), random(255));
  }
}
