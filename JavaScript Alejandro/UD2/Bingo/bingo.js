$bingo=(function(){
    
    let datosMarcador=[];
    let cartonJugadores=[];
    let bolasSacadas=[];

    function siguientBola(){
        let numAleatorio;
        while(bolasSacadas.length<50){
            numAleatorio=(Math.floor(Math.random()*(100-1))+1);
            for(bola of bolasSacadas){
                if(bolasSacadas[bola]!=numAleatorio){
                    bolasSacadas.push(numAleatorio);
                }
            }
        }
    }

    
    return ;
})();