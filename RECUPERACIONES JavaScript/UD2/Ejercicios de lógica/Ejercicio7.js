let numero;
let resultado;

do{
    numero = parseInt(prompt('Introduce un numero entre 0 y 10 para hacer su tabla de multiplicar'));

    if(numero<0 || numero>10){
        alert('Debes introducir un numero entre 0 y 10');
    }else if(isNaN(numero)){
        alert('Debes introducir un numero');
    }else{
        tablaMultiplicar(numero);
    }
    
}while(numero<0 || numero>10 || isNaN(numero));

function tablaMultiplicar(num){
    resultado = '';

    for(let i=0; i<=10; i++){
        console.log(`${num} x ${i} = ` + num*i); // Cambiar
    }
}