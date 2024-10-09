let numero1;
let numero2;

do{
    numero1=prompt('Introduce un numero entre 1 y 10');

    if(numero1>=1 && numero1<=10){
        do{
            numero2=prompt('Introduce otro numero entre 1 y 10 diferente al introducido anteriormente');
            //Compruebo cual es el numero menor
            if(numero1<numero2 && numero2>=1 && numero2<=10){
                for(let y=numero1; y<=numero2; y++){
                    for(let i=numero1; i<=numero2; i++){
                        console.log(y + '*' + i + '=' + (y*i) + " ");
                    }
                }
            }else if(numero1>numero2 && numero2>=1 && numero2<=10){
                for(let y=numero2; y<numero1; y++){
                    for(let i=numero2; i<=numero1; i++){
                        console.log(y + '*' + i + '=' + (y*i) + " ");
                    }
                }
            }
            
        
        }while(numero2<1 || numero2>10 || numero1==numero2);
    }

}while(numero1<1 || numero1>10);