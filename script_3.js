// Pyramide de Mario
// https://education.launchcode.org/skills-front-end/studios/mario/1/

number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

function pyramide(nb) {
	for (let count = 1; count <=nb; count++) {
		let floor = '';
		for ( let space = count; space <=nb; space++) {
			floor += ' ';
		};
		for ( let wall = 1; wall <=count; wall++) {
			floor += '#';
		};
		console.log(floor)
	}
}

pyramide(number);
