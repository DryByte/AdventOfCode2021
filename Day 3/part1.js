const fs = require("fs");
const binary_list = fs.readFileSync("./input.txt").toString().split("\n");

let array_bin = new Array(12);

for (var i = 0; i < 12; i++) {
	array_bin[i] = {um: 0, zero: 0};
}

for (let bin of binary_list) {
	let splita = bin.split("");

	for (let n in splita){
		if (splita[n]=="1") {
			array_bin[n].um += 1;
		} else{
			array_bin[n].zero += 1;
		}
	}
}

let gamma_rate = "";
let epsilon_rate = "";
for (let obj of array_bin) {
	if(obj.um > obj.zero) {
		gamma_rate += "1";
		epsilon_rate += "0";
	} else{
		gamma_rate += "0";
		epsilon_rate += "1";
	}
}

console.log(`Gamma: ${gamma_rate} - Epsilon: ${epsilon_rate}`);
console.log(`Gamma: ${parseInt(gamma_rate, 2)} - Epsilon: ${parseInt(epsilon_rate, 2)}`);

console.log(`Result: ${parseInt(gamma_rate,2)*parseInt(epsilon_rate,2)}`);