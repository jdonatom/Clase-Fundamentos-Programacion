const list = ['Ana', 88, 'Carlos', 76, 'Karina', 63];
let sum = 0;

// Promedio
for (let index = 0; index < list.length; index++) {
    if (typeof list[index] === 'number') {
        sum = sum + list[index]
    }
}
let average = Math.round((sum / (list.length / 2))*100) / 100;
console.log(`El promedio de calificaciones es: ${average}`)

// Lista de aprovados y reprobados
let studentApproved = [];
let studentFail = [];

for (let index = 0; index < list.length; index++) {
    if (typeof list[index] === 'number' && list[index] > 69) {
        studentApproved.push(list[index - 1]);
    } else if (typeof list[index] === 'number' && list[index] < 70) {
        studentFail.push(list[index - 1]);
    }
}
console.log(`Los estudiantes que aprobaron son: ${studentApproved.join(', ')}`)
console.log(`Los estudiantes que no aprobaron son: ${studentFail.join(', ')}`)

// Lista de calificaciones por lettras
const listLetter = [];

for (let index = 0; index < list.length; index++) {
    if (typeof list[index] === 'string') {
        listLetter.push(list[index])
    } else if (typeof list[index] === 'number' && list[index] >= 95) {
        list[index] = 'A';
        listLetter.push(list[index])
    } else if (typeof list[index] === 'number' && list[index] >= 90) {
        list[index] = 'B';
        listLetter.push(list[index])
    } else if (typeof list[index] === 'number' && list[index] >= 80) {
        list[index] = 'C';
        listLetter.push(list[index])
    } else if (typeof list[index] === 'number' && list[index] >= 70) {
        list[index] = 'D';
        listLetter.push(list[index])
    } else if (typeof list[index] === 'number' && list[index] < 70) {
        list[index] = 'F';
        listLetter.push(list[index])
    }
}
console.log(`La lista transformada es: ${listLetter.join(', ')}`)

// Calificaciones individuales
for (let index = 0; index < listLetter.length; index += 2) {
    console.log(`La calificación de ${listLetter[index]} es ${listLetter[index + 1]}`)
}

// Donato Morera Mejias