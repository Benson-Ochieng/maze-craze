const { Engine, Render, Runner, World, Bodies } = Matter;

const cells = 3;
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

const startRow = Math.floor(Math.random() * cells);
const startColumn = Math.floor(Math.random() * cells);

const stepThroughcell = (row, column) => {
  //If i have visited the cell at [row, column], then return.
  if (grid[row][column]) {
    return;
  }
  //Mark this cell as being visited
  grid[row][column] = true;

  //Assemble randomly-ordered list of neighbours
  const neighbours = [
    [row - 1, column, "up"], //Above
    [row, column + 1], //Right
    [row + 1, column], //Below
    [row, column - 1], //Left
  ];
  //For each neighbour...
  //See if neihbour is out of bounds
  //If we have visited that neighbour, continue to next neighbour
  //Rmove wall from either horizontal array or vertical array
  //visit that next cell
};

stepThroughcell(startRow, startColumn);
