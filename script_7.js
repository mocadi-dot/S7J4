// 2.4.2. Acné-Bot
function question(input) {

	if (input && input[input.length - 1] == "?") {
		return input;
	};
}

function majuscule(input) {

	if (input && input == input.toUpperCase()) {
		return input;
	};
}

function fornite(input) {

	if (input.indexOf("Fornite") != -1 || input.indexOf("fornite") != -1) {
		return input;
	};
}

function bot() {

	console.log("Bienvenue sur le chat de chat-bot !");
	console.log("Envoie 'exit' pour quitter le prompt");
	let input = prompt("Que veux-tu lui dire ?");

	while (input != "exit") {
		console.log(`Toi : ${input}`);
		switch (input) {
			case question(input):
				console.log("Bot : Ouais Ouais..");
				break;
			case majuscule(input):
				console.log("Bot : Pwa, calme-toi...");
				break;
			case fornite(input):
				console.log("Bot : on s' fait une partie soum-soum ?");
				break;
			case "":
				console.log("Bot : Tu es en PLS ?");
				break;
			default: 
				console.log("Bot : Balek.");
		};
		input = prompt("Que veux-tu lui dire ?");
	};
}

bot();
