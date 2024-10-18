function pintaCuadrado(lado){
    let resultado=[];
    
    for(let i=0; i<lado; i++){ //filas
        let fila=new Array(lado);

        for(let col=0; col<lado; col++){ //columnas
            if(i==0 || col==0 || i==lado-1 || col==lado-1){
                fila[col]='*   ';
            }else{
                fila[col]='    ';
            }
        }

        let filaTexto='';
        for(let col=0; col<lado; col++){
            filaTexto+=fila[col];
        }

        resultado[i]=filaTexto;
    }
    return resultado;
}

function pintaTriangulo(altura){
    let resultado=[];

    // Recorremos la altura por filas
    for (let i = 0; i<altura; i++){
        let fila=new Array(2*altura-1);
        
        for(let col=0; col<fila.length; col++){
            fila[col]='  ';
        }

        for(let col=altura-i-1; col<altura+i; col++){
            fila[col]='* '
        }

        let filaTexto='';
        for(let col=0; col<fila.length; col++){
            filaTexto+=fila[col];
        }

        resultado[i]=filaTexto;
    }

    return resultado;
}

let opcion=0;
let tamaño=0;

do{
    let resultadoAlert='';
    opcion=parseInt(prompt('Indica con numeros que figura geometrica dibujar: 1=Cuadrado, 2=Triangulo, 3=Rombo, 4=Salir'));
    if(opcion<4 && opcion>0){
        tamaño=parseInt(prompt('Indica el tamaño de la figura'));
        switch (opcion){
            case 1:
                cuadrado=pintaCuadrado(tamaño);
                for(resultado of cuadrado){
                    resultadoAlert+=resultado + '\n';
                }
                alert(resultadoAlert);
                break;

            case 2:
                triangulo=pintaTriangulo(tamaño);
                for(resultado of triangulo){
                    resultadoAlert+=resultado + '\n';
                }
                alert(resultadoAlert);
                break;

            case 3:
                rombo=pintaRombo(tamaño);
                for(resultado of rombo){
                    resultadoAlert+=resultado + '\n';
                }
                alert(resultadoAlert);
                break;

        }
    }else if(opcion<1 || opcion>4){
        alert('Introduce un numero valido');
    }
}while(opcion!==4);