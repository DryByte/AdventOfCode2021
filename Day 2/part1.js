// Depth based submarine
// up -=
// down +=

const fs = require("fs");
const movements = fs.readFileSync("./input.txt").toString().split("\n");
const EMoves = {
    forward: "+",
    up: "-",
    down: "+"
}

var submarine_pos = {
    x: 0,
    y: 0
}

for (let move of movements) {
    let moveP = move.split(" ");

    switch(moveP[0]) {
        case "forward":
            submarine_pos.x += parseInt(moveP[1]);
            break;
        case "up":
            submarine_pos.y -= parseInt(moveP[1]);
            break;
        case "down":
            submarine_pos.y += parseInt(moveP[1]);
            break;
    }
}

console.log(submarine_pos)
console.log(submarine_pos.x*submarine_pos.y)
