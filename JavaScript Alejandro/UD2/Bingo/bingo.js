$bingo=(function(){
    
    let datosMarcador=[];
    let cartonJugadores=[];
    let bolasSacadas=[];


    //cambiar a sacar 90 numeros y ordenarlos de forma aleatoria con sort random
    function siguientBola(){
        bolasAleatorias=[];

        for (let i=1; i<=90; i++){
            bolasAleatorias.push(i);
        }

        bolasAleatorias.sort(Math.random()-0.5)

        bolasSacadas.push(bolasAleatorias.shift());


        // let numAleatorio;
        // let bolaSacada=false;

        // // Saco un numero aleatorio hasta que no este en bolasSacadas[]
        // do{
        //     numAleatorio=(Math.floor(Math.random()*(90-1))+1);
        //     bolaSacada=true;

        //     for(let bola of bolasSacadas){
        //         if(bola===numAleatorio){
        //             bolaSacada=false
        //             break;
        //         }
        //     }
        // }while(!bolaSacada);

        // bolasSacadas.push(numAleatorio);
    }



    // generar 90 numeros y ordenarlos de forma aleatoria con sort (a,b)=>{} mathRadom()-0,5
    function generarCartones(){
        let carton=[[],[],[]];

        let aleatorio=[];
        for(let i=1; i<=90; i++){
            aleatorio.push(i);
        }

        aleatorio.sort(()=>Math.random()-0.5)

        }

    return ;
})();