function factorial(numero){
    let resultado=1;
    let string='';

    for(let i=numero; i>0; i--){
        resultado*=i; //calcula el factorial
        string+=(i>1) ? i+'x' : i+'='+resultado; //construye la cadena con operador ternario
    }

    return string;
}

do{
numero=prompt('Introduce un numero entre 3 y 10');
}while(numero<3 || numero>10);

alert(factorial(numero));
console.log(factorial(numero));