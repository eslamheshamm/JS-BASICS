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
