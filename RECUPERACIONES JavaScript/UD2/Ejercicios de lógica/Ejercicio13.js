let aciertos = 0;
let fallos = 0;
let operadores = ['+', '-', 'x', '/'];
let entrada;
let informePreguntas = [];
let resumenInforme = '';
let seguir;

for(let i=1; i<=4; i++){
seguir = 'no';
let resultado = 0;
let n1 = parseInt(Math.random()*(10 - 1 + 1) +1);
let n2 = parseInt(Math.random()*(10 - 1 + 1) +1);
let operador = operadores.sort(() => Math.random()-0.5);
let operadorRandom = operador[0];

switch (operadorRandom){
    case '+':
        resultado = n1 + n2;
        break;
    case '-':
        resultado = n1 - n2;
        break;
    case 'x':
        resultado = n1 * n2;
        break;
    case '/':
        resultado = (Math.round((n1 / n2)*100)) / 100; // Redondeamos a 2 decimales
        break;
}

    entrada = prompt('Cuanto es ' + n1 + operadorRandom + n2 + '?');

    if(entrada === null) break;

    if(parseInt(entrada) === resultado){
        aciertos++;
        informePreguntas.push(`${n1} ${operadorRandom} ${n2} SI es ${entrada}`);
    }else{
        fallos++;
        informePreguntas.push(`${n1} ${operadorRandom} ${n2} NO es ${entrada}, es ${resultado}`);
    }

    console.log(i);

    if(i === 4){
        seguir = confirm('¿Desea continuar?');

        if(seguir) i = 0;
    }
}

resumenInforme += 'Numero de aciertos: ' + aciertos + '\n';
resumenInforme += 'Numero de fallos: ' + fallos + '\n';
resumenInforme += 'Informe de preguntas: \n';

for(informe of informePreguntas){
    resumenInforme += informe + '\n';
}

console.log(resumenInforme);