// Calculadora simple

console.log('Bienvenido');
const number1 = parseFloat(prompt('Ingresa un número: '));
const number2 = parseFloat(prompt('Ingresa otro número: '));
const operator = prompt('Ingresa la operación que deseas hacer (+, -, * ó / ): ');

let result;

if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

console.log(`${number1} ${operator} ${number2} = ${result}`);