const number = 364;
const text = String(number);
let sum = 0;

for (let index = 0; index < text.length; index++) {
    sum = sum + Number(text[index]);
}

console.log(`La suma de los dígitos del número ${number} es ${sum}`);