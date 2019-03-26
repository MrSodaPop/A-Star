var openSet = [];
var closedSet = [];
var w = 20;
var cols = 20;
var rows = 20;
var grid = [];
var current;

var setup = function() {
    createCanvas(w*cols,w*rows);
    frameRate(5);
    for (let i = 0; i < cols; i++) {
        grid[i] = [];
        for (let j = 0; j < rows; j++) {
            console.log(new point(i,j));
            grid[i][j] = new point(i,j);
        }
    }
}

var draw = function() {
    background(51);
    if (openSet.length > 0) {

    }
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if (grid[i][j].wall) {
                let cell = grid[i][j]
                stroke(255);
                fill(255);
                elipse(cell.i,cell.j,cell.x,cell.y)
            }
        }
    }
}

var point = function(i,j) {
    this.i = i; // grid x
    this.j = j; // grid y
    this.x = i*w/2; // graphical x
    this.y = j*w/2; // graphical y

    this.f = 0; // total value
    this.g = 0; // running value
    this.h = 0; // heuristic value

    this.wall = false; // obstacle bool
    if (Math.random() < 0.3) {
        this.wall = true;
    }

}