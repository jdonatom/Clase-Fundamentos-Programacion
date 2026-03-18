const ticketPrice = 5000;
const age = 30;
const hasCoupon = true;
const hasStudentId = false;
const couponDiscount = 10;

const doubleDiscount65 = couponDiscount > 40;
const doubleDiscount = couponDiscount > 25;

// menor de 12
if (age <= 12){
console.log ('El precio de su tiquete es: 0');
}

// mayor de 65 sin cupon
else if (age >= 65 && hasCoupon == false){
console.log ('El precio de su tiquete es:', ticketPrice - ((ticketPrice / 100)*40));
}

// mayor de 65 con cupon
else if (age >= 65 && hasCoupon == true && doubleDiscount65 == true){
console.log ('El precio de su tiquete es:', ticketPrice - ((ticketPrice / 100)*couponDiscount));
}

// entre 13 y 64
else if (age > 12 && age < 65 && hasStudentId == false && hasCoupon == false){
console.log ('El precio de su tiquete es:', ticketPrice);
}

// entre 13 y 64 + estudiante sin cupon
else if (age > 12 && age < 65 && hasStudentId == true && hasCoupon == false){
console.log ('El precio de su tiquete es:', ticketPrice - ((ticketPrice / 100)*25));
}

// entre 13 y 64 + cupon sin ser estudiante
else if (age > 12 && age < 65 && hasCoupon == true && hasStudentId == false){
console.log ('El precio de su tiquete es:', ticketPrice - ((ticketPrice / 100)*couponDiscount));
}

// entre 12 y 64 + estudiante + cupon>25
else if (age > 12 && age < 65 && hasStudentId == true && hasCoupon == true && doubleDiscount == true){
console.log ('El precio de su tiquete es:', ticketPrice - ((ticketPrice / 100)*couponDiscount));
} 

// entre 12 y 64 + estudiante + cupon<25
else if (age > 12 && age < 65 && hasStudentId == true && hasCoupon == true && doubleDiscount == false){
console.log ('El precio de su tiquete es:', ticketPrice - ((ticketPrice / 100)*25));
}