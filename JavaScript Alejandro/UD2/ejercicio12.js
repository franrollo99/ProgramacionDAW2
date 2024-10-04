function adivinaNumero(numero, numeroSecreto){

    if(numero<numeroSecreto){
        return console.log('El numero secreto es mayor que el numero ' + numero);
    }else if(numero>numeroSecreto){
        return console.log('El numero secreto es menor que el numero ' + numero);
    }else{
        return alert('!!!HAS ACERTADO!!!');
    }
}

let numeroSecreto=Math.floor(Math.random()*100)+1;
let numero=0;
let intentos=5;

while(intentos>0 && numero!=numeroSecreto){
    do{
        numero=prompt('Introduce un numero entre 1 y 100');
        if(numero>=1 && numero<=100){
            adivinaNumero(numero, numeroSecreto);
        }
    }while(numero<1 || numero>100);

    intentos--;
}