// 2.3.2. Bibliothécaire

//Réalise un script script_5.js qui affichera dans la console
function library() {
 const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 },
    // { title: 'Tony Chu', id: 123456, rented: 0 }
];

//Est-ce que tous les livres ont été au moins empruntés une fois ?

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");

function rent() {
    for (let index in books) {
        if (books[index].rented == 0) {
            return false;
        }
    };
    return true;
}

console.log(rent());
  
//Quel est livre le plus emprunté ?


console.log("Quel est livre le plus emprunté ?");

function compare_rent(a, b) {
    const rentedA = a.rented;
    const rentedB = b.rented;

    let comparison = 0;
    if (rentedA > rentedB) {
        comparison = 1;
    } else if (rentedA < rentedB) {
        comparison = -1;
    }
    return comparison;
}

console.log(books.sort(compare_rent)[books.length - 1])



//Quel est le livre le moins emprunté ?

console.log("Quel est le livre le moins emprunté ?");

console.log(books.sort(compare_rent)[0])


//Trouve le livre avec l'ID: 873495 ;

console.log("Trouve le livre avec l'ID: 873495");

function find_book(id) {
    for (let index in books) {
        if (books[index].id == id) {
            return books[index];
        }
    };
    return "Book not found";
}

console.log(find_book(873495));
  
//Supprime le livre avec l'ID: 133712 ;


console.log("Supprime le livre avec l'ID: 133712");

function rm_book(id) {
    for (let index in books)
        if (books[index].id == id) {
            console.log(`${books[index].title} deleted`);
            delete books[index]
        };
}

rm_book(133712);

/* **** Question 6 **** */

console.log("Trie les livres par ordre alphabétique");

function compare_title(a, b) {
    const titleA = a.title;
    const titleB = b.title;

    let comparison = 0;
    if (titleA > titleB) {
        comparison = 1;
    } else if (titleA < titleB) {
        comparison = -1;
    }
    return comparison;
}

let new_books = books.sort(compare_title);
new_books.pop();
console.log(new_books);


