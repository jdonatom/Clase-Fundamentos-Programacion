const word = "zapato";
const vowels ="aeiou";

let totalAmount = 0;
let uniqueAmount = 0;

const vowelsFound = [];

for (let index = 0; index < word.length; index++) {
    const letter = word[index];
    if (vowels.includes(letter)) {
        totalAmount = totalAmount + 1;
        if (!vowelsFound.includes(letter)) {
            uniqueAmount = uniqueAmount + 1;
            vowelsFound.push(letter);
    }
    }
}

console.log(`La palabra ${word} tiene ${totalAmount} vocales totales y ${uniqueAmount} vocales únicas`);