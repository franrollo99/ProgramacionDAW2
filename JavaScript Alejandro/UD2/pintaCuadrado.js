function pintaCuadrado(lado){
    let result='';
    for(i=0; i<lado; i++){
        result+='* ';
    }

    result+='\n';

    for(i=0; i<lado-2; i++){
        result+='* ' + '  '.repeat(lado-2) + '* \n';
    }

    for(i=0; i<lado; i++){
        result+='* ';
    }

    return result;
}

console.log(pintaCuadrado(6))