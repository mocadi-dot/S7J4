// 2.3. Analyses de données
// 2.3.1. Startup Nation
function entrepreneurs() {
const a = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
];


let res1 = [];
let res2 = [];
let res3 = [];
let res4 = [];

for (var i = 0; i < a.length; i++) {
    if ((a[i].year > 1969) && (a[i].year < 1980)) {
        res1.push(a[i]);
    }
    res2.push(a[i].first);
    res2.push(a[i].last);
    res3.push(2020 - a[i].year);
    res4.push(a[i].last);


}
console.log("######## ANNEE 70 ########");
console.log(res1);
console.log("######## Name ########");
console.log(res2);
console.log("######## AGE ########");
console.log(res3);
console.log("######## Tri alpha ########");
console.log(res4.sort());
