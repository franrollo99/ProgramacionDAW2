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
    for(let i=1; i<=(diagonal/2)+0.5; i++){ //Recorre la altura

        resultadoRombo+=' '.repeat(diagonal/2-i+0.5)  + '*'.repeat(2*i-1) + '\n';
    }
    if(diagonal%2==0){
        for(let y=(diagonal/2); y>=1; y--){ //Recorre la altura invertida par

            resultadoRombo+=' '.repeat(diagonal/2-y)  + '*'.repeat(2*y-1) + '\n';
        }
    }else{
        for(let y=(diagonal/2); y>=1; y--){ //Recorre la altura invertida impar

            resultadoRombo+=' '.repeat(diagonal/2-y+1)  + '*'.repeat(2*y-2) + '\n';
        }
    }


    return resultadoRombo;
}



do{
    menu=parseInt(prompt('Introduce el numero asignado del poligono a generar: \n 1.Cuadrado hueco \n 2.Triangulo \n 3.Rombo \n 4.Borrar consola \n 0.Salir:'));
    if(menu==1 || menu==2 || menu==3){
        do{
            tamaño=prompt('Introduce el tamaño del poligono siendo 3 el tamaño mas pequeño y 10 el mayor:');
        }while(tamaño<3 || tamaño>10);
    }
    
    switch(menu){
        case 1:
            console.log(pintaCuadrado(tamaño));
            break;
        case 2:
            console.log(pintaTriangulo(tamaño));
            break;
        case 3:
            console.log(pintaRombo(tamaño));
            break;
        case 4:
            console.clear();
            break;
        case 0:
            alert('Saliendo del programa');
            break;
        default:
            alert('Introduce un numero valido');
    }
}while(menu!=0);