var openSet = [];
var closedSet = [];
var w = 20;
var cols = 20;
var rows = 20;
var grid = [];
var current;
var path = [];

var setup = function() {
    createCanvas(w*cols,w*rows);
    frameRate(5);
    for (let i = 0; i < cols; i++) {
        grid[i] = new Array(rows);
    }
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = new Point(i,j);
        }
    }
    grid[0][0].wall = false;
    grid[0][0].g = 1;
    grid[0][0].f = grid[0][0].g + heuristic(grid[0][0],grid[cols-1][rows-1]);
    grid[cols-1][rows-1] = false;
    
}

var draw = function() {
    background(51);
    if (openSet.length > 0) {
        if (current.i === cols-1 && current.j === rows-1) {

        }
    }
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if (grid[i][j].wall) {
                let cell = grid[i][j]
                stroke(255);
                fill(255);
                ellipse(cell.x,cell.y,w/2,w/2);
            }
        }
    }
}

var heuristic = function(a,b) {
    let d = abs(a.x-b.x) + abs(a.y-b.y);
    return d;
}

var Point = function(i,j) {
    this.i = i; // grid x
    this.j = j; // grid y
    this.x = i*w + w/2;
    this.y = j*w + w/2;

    this.f = 0; // total value
    this.g = 0; // running value
    this.h = 0; // heuristic value

    this.wall = false; // obstacle bool
    this.previous = null;

    if (random() < 0.3) {
        this.wall = true;
    }

}