function numeroAleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function operadorAritmetico(){
    let operadores=['+','-','*','/'];
    return operadores[numeroAleatorio(0, operadores.length-1)]
}

function operacion(n1, n2, operador){
    resultadoOp=0

    switch (operador){
        case '+':
            resultadoOp=n1+n2;
            break;
        case '-':
            resultadoOp=n1-n2;
            break;
        case '*':
            resultadoOp=n1*n2;
            break;
                
        case '/':
            resultadoOp=n1/n2;
            break;
        default:
            resultadoOp=null;
    }

    return resultadoOp;
}

let n1=numeroAleatorio(0, 10);
let n2=numeroAleatorio(0, 10);
let operador=operadorAritmetico();

resultado=prompt('Introduce el resultado de ' + n1 + operador + n2);

if(resultado==operacion(n1, n2, operador)){
    alert('Felicidades');
}