let numero1;
let numero2;

do{
    numero1 = parseInt(prompt('Introduce un numero entre 0 y 100'));

    if(numero1<0 || numero1>100){
        alert('Debes introducir un numero entre 0 y 100');
    }else if(isNaN(numero1)){
        alert('Debes introducir un numero');
    }else{
        do{
            numero2 = parseInt(prompt('Introduce otro numero entre 0 y 100 para calcular si el rango de numeros entre ambos incluidos son multiplos de 3 o 5 o si son primos'));
        
            if(numero2<0 || numero2>100){
                alert('Debes introducir un numero entre 0 y 100');
            }else if(isNaN(numero2)){
                alert('Debes introducir un numero');
            }else{
                esMultiplo(numero1, numero2);
            }
            
        }while(numero2<0 || numero2>100 || isNaN(numero2));
    }
    
}while(numero1<0 || numero1>100 || isNaN(numero1));

function esMultiplo(num1, num2)
{
    let numeros = [];
    let multiplo3 = [];
    let multiplo5 = [];
    let primo = [];
    let resultado = '';

    if(num1<num2){
        for(let n=num1; n<=num2; n++){
            numeros.push(n);

            if(n%3 === 0)multiplo3.push(n);
            if(n%5 === 0)multiplo5.push(n);
            if(esPrimo(n))primo.push(n);
        }
    }else{
        for(let n=num2; n<=num1; n++){
            numeros.push(n);

            if(n%3 === 0)multiplo3.push(n);            
            if(n%5 === 0)multiplo5.push(n);
            if(esPrimo(n))primo.push(n);
        }
    }

    
    resultado += 'De los siguientes numeros: ';

    for(let numero of numeros){
        resultado += `${numero} `;
    }

    if(multiplo3.length>0){
        resultado += '\nSon multiplos de 3 los siguientes numeros: ';

        for(let numero of multiplo3){
            resultado += `${numero} `;
        }
    }else{
        resultado += '\nNo hay multiplos de 3';
    }

    if(multiplo5.length>0){
        resultado += '\nSon multiplos de 5 los siguientes numeros: ';

        for(let numero of multiplo5){
            resultado += `${numero} `;
        }
    }else{
        resultado += '\nNo hay multiplos de 5';
    }

    
    if(primo.length>0){
        resultado += '\nSon primos los siguientes numeros: ';

        for(let numero of primo){
            resultado += `${numero} `;
        }
    }else{
        resultado += '\nNo hay numeros primos';
    }

    console.log(resultado);
}



function esPrimo(numPrimo)
{
    if(numPrimo <= 1) return false;

    for(let p=2; p<=Math.sqrt(numPrimo); p++){
        if(numPrimo%p === 0){
            return false;
        }
    }

    return true;
}