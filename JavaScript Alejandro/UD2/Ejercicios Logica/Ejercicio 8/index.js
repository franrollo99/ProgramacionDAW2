function calculaFactorial(numero){
    let string='';
    let resultado=1;
    for(let i=numero; i>0; i--){
        resultado*=i;
        //operador ternario
        string+=(i>1) ? i+'x' : i+'='+resultado;
    }
    return string;
}

let numero;
do{
    numero=parseInt(prompt('Introduce un numero mayor que 1 y menor que 10'));
}while(numero<=1 || numero>10);

console.log(calculaFactorial(numero));