let entrada;

// Formula para numero aleatorio -> Math.random() * (max - min + 1) + min);
let numSecreto = Math.round(Math.random()*100);

for(let i=0; i<5; i++){
    do{
        entrada = parseInt(prompt('Adivina el numero secreto entre 0 y 100'));
    
        if(isNaN(entrada)){
            alert('Debes introducir un numero');
        }
        
    }while(isNaN(entrada))

    if(entrada === numSecreto){
        console.log('¡¡¡¡¡ HAS ACERTADO !!!!!');
        break;
    }else{
        if(i === 4){
            console.log('Has perdido :( \nEl numero secreto era el ' + numSecreto);
            break;
        }
        if(entrada>numSecreto){
            console.log('El numero secreto es menor que ' + entrada);
        }else{
            console.log('El numero secreto es mayor que ' + entrada);
        }
    }
}