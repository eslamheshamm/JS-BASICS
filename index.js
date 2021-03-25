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

const charachters = ["Patrick", "Chewie", "Loka", "Zozi"];
// Manipulating array
// console.log(charachters);
// charachters.push("Lio");
// charachters.push("Adam");
// console.log(charachters);
// charachters.pop();
// charachters.pop();
// console.log(charachters);
// charachters.unshift("Joji");
// charachters.unshift("Asap");
// console.log(charachters);
// charachters.shift();
// charachters.shift();
// console.log(charachters);
// charachters.splice(0, 1, "Loly");
// console.log(charachters);
// charachters.splice(1, 2, "Kylo");
// console.log(charachters);
// charachters.splice(1, 1, "CC", "DD");
// console.log(charachters);
// charachters.splice(1, 2);
// console.log(charachters);
// charachters.push("RR2");
// charachters.push("AA#");
// console.log(charachters);
// charachters.reverse();
// console.log(charachters);
// charachters.sort();
// console.log(charachters);

const postiotion = charachters.indexOf("Loka");
console.log(postiotion);
charachters.push("Loka");
const lastPostiotion = charachters.lastIndexOf("Loka");
console.log(lastPostiotion);
charachters.pop();
console.log(charachters);
// --------------------------------------------------- //
// playing with objects
let dog = { name: "Woody", type: "dog" };
let cat = { name: "Bob", type: "cat" };
console.log(cat, dog);

let pets = [{ name: "Woody", type: "dog" }, cat];
console.log(pets);

pets.push({ name: "Roxy", type: "dog" });
console.log(pets[2]);

cat.age = 1;
dog["age"] = 3;
pets[0].age = 5;
pets[2].age = 7;

pets[1].age = 11;
pets[1].hungry = true;
console.log(pets);

// for loops
let names = ["Eslam", "Hesham", "Ahmed", "Osman", "Mohamed", "Hamza", "Sayed"];
let numNames = names.length;
// increament
for (let i = 0; i < numNames; i++) {
	console.log(names[i]);
}
// decreament
for (let i = numNames - 1; i >= 0; i--) {
	console.log(names[i]);
}
// for (of)
for (let name of names) {
	console.log(name);
}
