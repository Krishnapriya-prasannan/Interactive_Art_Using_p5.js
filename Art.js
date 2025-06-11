let flowers = [];

function setup() {

  createCanvas(windowWidth, windowHeight);

  colorMode(HSB, 360, 100, 100, 100);

  noFill();

  strokeWeight(2);

  background(230, 30, 95);

}

function draw() {

  background(230, 30, 95, 20);

  for (let i = flowers.length - 1; i >= 0; i--) {

    flowers[i].update();

    flowers[i].show();

    if (flowers[i].age > flowers[i].life) {

      flowers.splice(i, 1);

    }

  }

}

function mousePressed() {

  flowers.push(new Flower(mouseX, mouseY));

}

class Flower {

  constructor(x, y) {

    this.pos = createVector(x, y);

    this.time = random(1000);

    this.life = 360;

    this.age = 0;

  }

  update() {

    this.time += 0.02;

    this.age++;

  }

  show() {

    push();

    translate(this.pos.x, this.pos.y);

    let petals = 12;

    let alpha = map(this.age, 0, this.life, 80, 0);

    alpha = constrain(alpha, 0, 80);

    for (let i = 0; i < petals; i++) {

      let angle = TWO_PI * i / petals + this.time * 0.5;

      let length = 100 + 30 * sin(this.time * 2 + i);

      let hue = (200 + 60 * sin(this.time + i)) % 360;

      stroke(hue, 80, 90, alpha);

      beginShape();

      for (let t = 0; t <= 1; t += 0.02) {

        let x = lerp(0, cos(angle) * length, t) + sin(t * PI) * 20 * cos(angle + HALF_PI);

        let y = lerp(0, sin(angle) * length, t) + sin(t * PI) * 20 * sin(angle + HALF_PI);

        vertex(x, y);

      }

      endShape(CLOSE);

    }

    pop();

  }

}


