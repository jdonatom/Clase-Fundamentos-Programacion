// Calcular un solo cliente

const numberOfCustomers = 25;
let totalSeconds = 0;

if (numberOfCustomers % 2 === 0 &&  numberOfCustomers % 10 === 0) {
    totalSeconds = ((numberOfCustomers * 60) + 45) + 1091;
} else if (numberOfCustomers % 2 === 0 &&  numberOfCustomers % 5 === 0) {
    totalSeconds = ((numberOfCustomers * 60) + 45) + 2220;
} else if (numberOfCustomers % 2 === 0) {
    totalSeconds = ((numberOfCustomers * 60) + 45);
} else if (numberOfCustomers % 2 === 1 &&  numberOfCustomers % 10 === 0) {
    totalSeconds = 20 + 1091;
} else if (numberOfCustomers % 2 === 1 &&  numberOfCustomers % 5 === 0) {
    totalSeconds = 20 + 2220;
} else if (numberOfCustomers % 2 === 1) {
    totalSeconds = 20;
}

let hours = Math.floor(totalSeconds / 3600);
let minutes = Math.floor((totalSeconds % 3600) / 60);
let seconds = totalSeconds % 60;

if (hours > 0 && minutes > 0) {
    console.log(`A el cajero le va a tomar ${hours} horas, ${minutes} minutos, y ${seconds} segundos.`)
} else if (minutes > 0) {
    console.log(`A el cajero le va a tomar ${minutes} minutos, y ${seconds} segundos.`)
} else {
    console.log(`A el cajero le va a tomar ${seconds} segundos.`)
}

// DonatoMorera