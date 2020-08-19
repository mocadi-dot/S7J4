prompt("De quel nombre veux-tu calculer la factorielle ?");

// Utilisateur rentre un nombre (par ex 4)
// Dans la console le résultat suivant est affiché
"Le résultat est : 24"
var f = [];
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
} ​

result =factorial(input)
console.log("Le résultat est :" + result");
