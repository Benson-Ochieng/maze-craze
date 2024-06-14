const { Engine, Render, Runner, World, Bodies } = Matter;

const cells = 5;
const width = 600;
const height = 600;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: true,
    width: width,
    height: height,
  },
});
Render.run(render);
Runner.run(Runner.create(), engine);

//Walls
const walls = [
  Bodies.rectangle(width / 2, 0, width, 40, { isStatic: true }), //Top Wall
  Bodies.rectangle(width / 2, height, width, 40, { isStatic: true }), // Bottom Wall
  Bodies.rectangle(0, height / 2, 40, height, { isStatic: true }), //Left Wall
  Bodies.rectangle(width, height / 2, 40, height, { isStatic: true }), //Right Wall
];
World.add(world, walls);

//Creating the Maze

const grid = Array(cells)
  .fill(null)
  .map(() => Array(cells).fill(false));

const verticals = Array(cells)
  .fill(null)
  .map(() => Array(cells - 1).fill(false));

const horizontal = Array(cells - 1)
  .fill(null)
  .map(() => Array(cells).fill(false));

console.log(verticals);
