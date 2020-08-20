// 2.4. Creusons-nous la tête
// 2.4.1. Code la vie

function codon(arn) {

    let codons = [];
    let index = 0;

    for (let count = 0; count <= (arn.length - 1); count += 3) {
        codons[index] = arn.slice(count, count + 3);
        index++;
    };
    return codons;
}

// Return l'acide aminé correspondant au codon
function retranscrit(codon) {
    switch (codon) {
        case "UCU":
        case "UCC":
        case "UCA":
        case "UCG":
        case "AGU":
        case "AGC":
            return "Sérine";
        case "CCU":
        case "CCC":
        case "CCA":
        case "CCG":
            return "Proline";
        case "UUA":
        case "UUG":
            return "Leucine";
        case "UUU":
        case "UUC":
            return "Phénylalanine";
        case "CGU":
        case "CGC":
        case "CGA":
        case "CGG":
        case "AGA":
        case "AGG":
            return "Arginine";
        case "UAU":
        case "UAC":
            return "Tyrosine";
    };
}

function genetic(arn) {

    let codons = codon(arn);
    let acides = [];

    for (let index = 0; index <= (codons.length - 1); index++) {
        acides[index] = retranscrit(codons[index]);
    }
    return acides.join("-");
}

console.log("L'ARN CCG-UCG-UUG-CGC-UAC-AGC donne :");
console.log(genetic("CCGUCGUUGCGCUACAGC"));
// => Proline-Sérine-Leucine-Arginine-Tyrosine-Sérine

console.log("L'ARN CCU-CGC-CGG-UAC-UUC-UCG donne :");
console.log(genetic("CCUCGCCGGUACUUCUCG"));
// => Proline-Arginine-Arginine-Tyrosine-Phénylalanine-Sérine
