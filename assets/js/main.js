let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];
function sortierung() {
    console.log(languages.sort());
}
sortierung();
// reverse()
function sortierung2() {
    console.log(languages.reverse());
}
sortierung2();
// lev1_13 Arrays Join()
let meinText1 = ["Hello", "World"];
let meinText2 = ["Anass", "Elaine", "Eric", "Georg"];
let join1 = meinText1.join();// Hello,World
let join2 = meinText1.join("");// Helloworld
let join3 = meinText1.join(" ");//Hello World
let join4 = meinText1.join("+");//Hello+World

console.log(join1);
console.log(join2);
console.log(join3);
console.log(join4);
let join5 = meinText2.join();// Anass,Elaine,Eric,Georg
let join6 = meinText2.join("-");//Anass-Elaine-Eric-Georg
let join7 = meinText2.join(" ");//Anass Elaine Eric Georg
let join8 = meinText2.join("");//AnassElaineEricGeorg

console.log(join5);
console.log(join6);
console.log(join7);
console.log(join8);

// sort() numbers
//Sortiere die Nummern aufsteigend.
let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];
console.log(numArray2.sort((a, b) => a - b));

// Lev3_! Reverse Name, Words
function reverseWord(str) {
    return str.split("").reverse().join("");
}

console.log(reverseWord("sara"));
console.log(reverseWord("Sergio"));
console.log(reverseWord("Hannah"));
console.log(reverseWord("Regallager"));
console.log(reverseWord("Reliefpfeiler"));
console.log(reverseWord("Rentner"));
console.log(reverseWord("Ella mag alle Bohnen"));
console.log(reverseWord("han nesaH has ennaH"))

//Lev1_1_js-vertiefung_array-iteration_forEach()
console.log('%c---------forEach()---------', 'color:purple');

let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]
getraenke.sort()
console.log(getraenke)
function myDrinks() {
    getraenke.forEach(element => console.log(element));
    getraenke.forEach(element => document.write(element + "<br>"));
}
myDrinks();
// Lev 1:5 forEach() 
console.log('%c---------forEach().02---------', 'color:purple');
let checkNumber = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];
checkNumber.forEach(e => {
    if (e % 3 == 0) {
        let newLocal = e + 100;
        // return e + 100;
        console.log(newLocal)
    }
    else if (e % 3 != 0) {
        console.log(e)
    }
    // console.log(e)
})
// Lev 1-2 map() 
console.log('%c---------map()---------', 'color:purple');
let upperDrinks = getraenke.map(e => {
    return e.toLocaleUpperCase();
})
console.log(upperDrinks);
// Lev 1_3 Map()
let array = [18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17,
    56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6,
    27, 71, 26, 15, 78
];
let map1 = array.map(x => x * 2);

console.log(map1.sort((a, b) => a - b));
