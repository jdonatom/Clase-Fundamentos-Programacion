const lunes = "Lunes";
const martes = "Martes";
const miercoles = "Miercoles";
const jueves = "Jueves";
const viernes = "Viernes";
const sabado = "Sabado";
const domingo = "Domingo";

let hoy = "Miercoles"

console.log("hoy es lunes?", lunes == hoy);
console.log("hoy es miercoles?", miercoles == hoy);
console.log("hoy es martes o miercoles?", martes == hoy || miercoles == hoy);
console.log("hoy es miercoles y jueves?", miercoles == hoy && jueves == hoy);