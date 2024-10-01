let poligono;
let tamaño;

function pintaCuadrado(lado){
    let resultadoCuadrado='';
    for(i=0; i<lado; i++){
        resultadoCuadrado+='* ';
    }

    resultadoCuadrado+='\n';

    for(i=0; i<lado-2; i++){
        resultadoCuadrado+='* ' + '  '.repeat(lado-2) + '*\n';
    }

    for(i=0; i<lado; i++){
        resultadoCuadrado+='* ';
    }

    return resultadoCuadrado;
}

function pintaTriangulo(altura){
    let resultadoTriangulo='';
    for(let i=1; i<=altura; i++){ //Recorre la altura

        resultadoTriangulo+=' '.repeat(altura-i)  + '*'.repeat(2*i-1) + '\n';
    }
    return resultadoTriangulo;
}

function pintaRombo(diagonal){
    let resultadoRombo='';
    for(let i=1; i<=diagonal/2; i++){ //Recorre la altura

        resultadoRombo+=' '.repeat(diagonal/2-i)  + '*'.repeat(2*i-1) + '\n';
    }
    for(let i=diagonal/2; i>=1; i--){ //Recorre la altura

        resultadoRombo+=' '.repeat(diagonal/2-i)  + '*'.repeat(2*i-1) + '\n';
    }
    return resultadoRombo;
}



do{
    poligono=prompt('Introduce el nombre del poligono a generar ("cuadrado hueco", "triangulo" o "rombo":');
    do{
        tamaño=prompt('Introduce el tamaño del poligono siendo 3 el tamaño mas pequeño y 10 el mayor:');
    }while(tamaño<3 || tamaño>10);
    
    switch(poligono){
        case 'cuadrado hueco':
            console.log(pintaCuadrado(tamaño));
            break;
        case 'triangulo':
            console.log(pintaTriangulo(tamaño))
            break;
        case 'rombo':
            alert(pintaRombo(tamaño))
            break;
    }
}while(poligono!='cuadrado hueco' && poligono!='triangulo' && poligono!='rombo');