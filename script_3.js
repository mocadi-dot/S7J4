// Pyramide de Mario
// https://education.launchcode.org/skills-front-end/studios/mario/1/

function pyramid() {
  let n = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "#".repeat(i));
  }
}
