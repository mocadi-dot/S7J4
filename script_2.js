  
let answer = prompt("De quel nombre veux-tu calculer la factorielle ?");

function factorial(answer) {
	let number = 1;
	for (let count = 1; count <=answer; count++) {
		number *= count;
	};
	console.log(number)
};

factorial(answer);
