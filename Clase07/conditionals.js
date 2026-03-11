const userName = 'user001';
const password = '1234';
const savedPassword = '1234';
const userAnswer = 'Pacha'
const savedAnswer = 'Pacha';

if (userName != 'user001'){
console.log ('Su usuario no existe');
}

if (userName == 'user001' && password == '1234') {
console.log ('Puedes iniciar sesion');
}

if (password != '1234' && userName == 'user001' && userAnswer == savedAnswer){
console.log ('Puede iniciar sesion');
}

if (userName != 'user001' && password != savedPassword && userAnswer != savedAnswer){
console.log ('No puede iniciar sesion');
}