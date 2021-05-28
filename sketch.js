let Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

let particles = [];
let plinkos = [];
let divisions = [];
let divisionHeight = 300;
let particle,
  score = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20);

  //create division objects
  for (let k = 0; k <= 800; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (let j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 75));
  }

  //create 2nd row of plinko objects
  for (let j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 175));
  }

  //create 3rd row of plinko objects

  for (let j = 50; j <= width - 20; j = j + 50) {
    plinkos.push(new Plinko(j, 275));
  }

  //create 4th row of plinko objects

  for (let j = 50; j <= width - 30; j = j + 50) {
    plinkos.push(new Plinko(j, 375));
  }

  //create 5th row of plinko objects

  for (let j = 50; j <= width - 30; j = j + 50) {
    plinkos.push(new Plinko(j, 475));
  }
}

function draw() {
  background('black');
  textSize(20);
  fill('pink');
  text('Click To Generate Particles', 500, 50);
  text('Score: ' + score, 100, 50);
  Engine.update(engine);
  ground.display();

  //display the plinkos
  for (let i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  //display the divisions
  for (let k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles

  for (let k = 0; k < particles.length; k++) {
    particles[k].display();
    if (particles[k].body.position.y > 750 && particles[k].body.position.y < 760) score++;
  }
}

document.body.addEventListener('click', function () {
  const particle = new Particle(mouseX, mouseY);
  if (particle.body.position.y < 100 && particles.length <= 20) particles.push(particle);
});
