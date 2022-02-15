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
