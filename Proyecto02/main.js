const numberOfCustomers = 25;

let totalSeconds = 0;

function message(hours, minutes, seconds, index) {
    if (hours > 0 && minutes > 0) {
        console.log(`A el cajero le va a tomar ${hours} horas, ${minutes} minutos, y ${seconds} segundos atender al cliente ${index}.`)
    } else if (minutes > 0) {
        console.log(`A el cajero le va a tomar ${minutes} minutos, y ${seconds} segundos atender al cliente ${index}.`)
    } else {
        console.log(`A el cajero le va a tomar ${seconds} segundos atender al cliente ${index}.`)
    }
}
if (numberOfCustomers >90) {
    console.log(`El número máximo de personas por cajero es 90, prueba reduciendo el número de clientes`)
}

for (let index = 1; index <= numberOfCustomers && numberOfCustomers < 91; index++) {
    if (index % 2 === 0 &&  index % 10 === 0) {
        totalSeconds = ((index * 60) + 45) + 1091;
    } else if (index % 2 === 0 &&  index % 5 === 0) {
        totalSeconds = ((index * 60) + 45) + 2220;
    } else if (index % 2 === 0) {
        totalSeconds = ((index * 60) + 45);
    } else if (index % 2 === 1 &&  index % 10 === 0) {
        totalSeconds = 20 + 1091;
    } else if (index % 2 === 1 &&  index % 5 === 0) {
        totalSeconds = 20 + 2220;
    } else if (index % 2 === 1) {
        totalSeconds = 20;
    }
        let hours = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor((totalSeconds % 3600) / 60);
        let seconds = totalSeconds % 60;
        message(hours, minutes, seconds, index)
}

// DonatoMorera