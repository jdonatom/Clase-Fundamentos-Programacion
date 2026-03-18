// let cantidadQueFalta = 20;
// while (cantidadQueFalta > 0){
//     if (cantidadQueFalta % 2 === 0){
//         console.log('Sorpresa para estudiante', cantidadQueFalta);
//     } else {
//         console.log('Correo normal para estudiante', cantidadQueFalta);
//     }
//     cantidadQueFalta = cantidadQueFalta - 1;
// }

// let iteraciones = 100;
// while (iteraciones > 0){
//     const residuoDe5 = iteraciones % 5 === 0;
//     const residuoDe3 = iteraciones % 3 === 0;
//     if (residuoDe5 && residuoDe3){
//         console.log ('El número ', iteraciones, 'es múltiplo de 3 y 5');
//     } else if (residuoDe5) {
//         console.log ('El número ', iteraciones, 'es múltiplo de 5');
//     }else if (residuoDe3) {
//         console.log ('El número ', iteraciones, 'es múltiplo de 3');
//     }
//     iteraciones = iteraciones - 1;
// }

const number = 3;
let multiply = 1;
while (multiply <= 10){
    console.log (number + 'x' + multiply +  '=' + (number * multiply));
    multiply = multiply + 1;
}