const fs = require("fs");
const numbers = fs.readFileSync("./input.txt").toString().split("\n");

let times = 0;
for (var i = 0; i < numbers.length; i++) {
	let currentnum = parseInt(numbers[i]);
	let previousnum = parseInt(numbers[i-1]);

	if (currentnum >= previousnum)
		times++;
}

console.log(times);