const fs = require("fs");
const numbers = fs.readFileSync("./input.txt").toString().split("\n");
const nArray = [];

for (var i = 0; i < numbers.length; i++) {
	let currentnum = parseInt(numbers[i]);
	let snum = parseInt(numbers[i+1]);
	if (i+1 >= numbers.length) {
		snum = 0;
	}

	let tnum = parseInt(numbers[i+2]);
	if (i+2 >= numbers.length) {
		tnum = 0;
		console.log(i);
	}

	nArray.push(currentnum+snum+tnum);
}

let times = 0;
for (var i = 0; i < nArray.length; i++) {
	let currentnum = nArray[i];
	let previousnum = nArray[i-1];

	if (currentnum > previousnum)
		times++;
}

console.log(times);