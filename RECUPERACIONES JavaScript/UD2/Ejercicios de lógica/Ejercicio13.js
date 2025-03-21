let acierto = 0;
let fallo = 0;
let operadores = ['+', '-', '*', '/'];
let entrada;


let resultado = 0;
let n1 = parseInt(Math.random()*(10 - 1 + 1) +1);
let n2 = parseInt(Math.random()*(10 - 1 + 1) +1);
let operadorRandom = operadores.sort(() => Math.random()-0.5).shift();

switch (operadorRandom){
    case '+':
        resultado = n1 + n2;
        break;
    case '-':
        resultado = n1 - n2;
        break;
    case '*':
        resultado = n1 * n2;
        break;
    case '/':
        resultado = (Math.round((n1 / n2)*100)) / 100; // Redondeamos a 2 decimales
        break;
}

console.log(resultado);

do{
    entrada = prompt('Cuanto es ' + n1 + operadorRandom + n2 + '?');

}while(entrada !== null)