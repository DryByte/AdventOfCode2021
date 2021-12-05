const fs = require("fs");
const binary_list = fs.readFileSync("./input.txt").toString().split("\n");

// Function to count the numbers in specific position
function count_numbers(array_to_count, pos_count, priority) {
	let ones = 0;
	let zeros = 0;
	for (let num of array_to_count) {
		let split_n = num.split("");

		if(split_n[pos_count] == "1") {
			ones++;
		} else {
			zeros++;
		}
	}

	if (priority == "1") {
		if (ones >= zeros) {
			return "1";
		} else {
			return "0";
		}
	} else {
		if (zeros <= ones) {
			return "0";
		} else {
			return "1";
		}
	}
}

function new_array(old_array, pos, to_keep) {
	let to_r = [];
	for (let num of old_array) {
		let split_n = num.split("");

		if (split_n[pos] == to_keep) {
			to_r.push(num);
		}
	}

	return to_r;
}

var current_one_array = binary_list;
var current_zero_array = binary_list;
for (var i = 0; i < 12; i++) {
	if (current_one_array.length > 1) {
		let to_keep_o = count_numbers(current_one_array, i, "1");
		current_one_array = new_array(current_one_array, i, to_keep_o);
	}

	if (current_zero_array.length > 1) {
		let to_keep_z = count_numbers(current_zero_array, i, "0");
		current_zero_array = new_array(current_zero_array, i, to_keep_z);
	}
}

console.log(current_one_array);
console.log(current_zero_array);

console.log(parseInt(current_one_array[0],2)*parseInt(current_zero_array[0],2));