function verificarRango(inicio, fin){
    for(i=inicio; i<=fin; i++){
        if(i%3==0){
            console.log('El numero ' + i + ' es multiplo de 3');
        }
        
        if(i%5==0){
            console.log('El numero ' + i + ' es multiplo de 5');
        }

        let esPrimo=true; //Definimos una variable en la que damos por hecho que el numero es primo

        //Si el numero es menor que 2 no es primo
        if(i<2){
            esPrimo=false;
        }else{
            for(let j=2; j<=Math.sqrt(i); j++){
                if(i%j==0){
                    esPrimo=false;
                    break;
                }
            }
        }

        if(esPrimo){
            console.log('El numero ' + i + ' es primo');
        }
    }
}

verificarRango(5, 15);