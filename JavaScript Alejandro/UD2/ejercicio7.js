let numero1;
let numero2;

do{
    numero1=prompt('Introduce un numero entre o y 10');

    do{
        numero2=prompt('Introduce otro numero entre o y 10 diferente al introducido anteriormente');
        
        //Compruebo cual es el numero menor
        if(numero1<numero2){
            for(let y=numero1; y<=numero2; y++){
                for(let i=numero1; i<=numero2; i++){
                    // document.write(y + '*' + i + '=' + (y*i) + " ");
                    console.log(y + '*' + i + '=' + (y*i) + " ");
                }
            }
        }else{
            for(let y=numero2; y<=numero1; y++){
                for(let i=numero2; i<=numero1; i++){
                    console.log(y + '*' + i + '=' + (y*i) + " ");
                }
            }
        }
    
    }while(numero2<0 || numero2>10 || numero1==numero2);

}while(numero1<0 || numero1>10);