// Declearing Variable
// Declares a variable, optionally initializing it to a value.
let x;
// Assign value to variable
x = "Hi";
// Declearing & Assigning at the same time
const y = "World";
// Datatypes
const a = "AAAA"; // String
const b = 2; // Number
const c = true; // Boolean
const d = ["hi", "world", "learn", 1, true];
const e = { firstName: "Eslam", lastName: "Hesham", age: 21 };
// ES06 and the new way to decleare variable
// Declares a block-scoped, local variable, optionally initializing it to a value.
const z = "Eslam";
// Declares a block-scoped, read-only named constant.
const xx = "Hesham";

// iteration vs recurasion
// iteration: impartive - looping - stateful
const sum = (numbers) => {
	let total = 0;
	for (i = 0; i < numbers.length; i++) {
		total += numbers[i];
	}
	return total;
};
sum([0, 2, 4]); // 6
// recursion: functional - self-referential stateless
const sum1 = (numbers) => {
	if (numbers.length === 1) {
		// base case
		return numbers[0];
	} else {
		// recursive case
		return numbers[0] + sum1(numbers.slice(1));
	}
};
sum1([2, 4, 10]);
// else if statements
const age = 45;

if (age < 21) {
	console.log(`You're less than 21`);
} else if (age > 21 && age < 30) {
	console.log(`you're between 21 & 30`);
} else if (age < 0) {
	console.log(`you're not born yet`);
} else {
	console.log(`you're older than 30`);
}

// TERNARY statement
age == 45 ? console.log("yep") : console.log("nope");
// Arrays

const charachters = ["Patrick", "Chewie", "Loka"];
console.log(charachters);
charachters.push("Lio");
charachters.push("Adam");
console.log(charachters);
charachters.pop();
charachters.pop();
console.log(charachters);
charachters.unshift("Joji");
charachters.unshift("Asap");
console.log(charachters);
charachters.shift();
charachters.shift();
console.log(charachters);
