const list = [32, 87, 999, 1777232, 1, 54, 111];
let pares = [];
let impares = [];

for (let index = 0; index < list.length; index++) {
    if ((list[index] % 2) === 0 ) {
        pares.push(list[index]);
    } else {
        impares.push(list[index]);
    }
}

console.log("Pares:", pares);
console.log("Impares:", impares);