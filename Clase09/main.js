const word = "reconocer";
let wordReversed = "";
const charAmount = word.length;

for(let letter = charAmount - 1; letter >= 0; letter--) {
wordReversed = wordReversed + word.charAt(letter)
}

if (word === wordReversed) {
    console.log (`La palabra ${word} si es un palindromo`)
} else {
    console.log (`La palabra ${word} no es un palindromo`)
}