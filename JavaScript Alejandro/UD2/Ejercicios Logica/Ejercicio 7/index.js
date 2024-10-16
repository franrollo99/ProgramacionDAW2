function tablaMultiplicar(n1, n2){
    
    if(n1>n2){
        for(let i=n2; i<=n1; i++){
            console.log(n1 + ' x ' + i + ' = ' + (n1*i));
        }
    }else{
        for(let i=n1; i<=n2; i++){
            console.log(n2 + ' x ' + i + ' = ' + (n2*i));
        }
    }
}

let n1;
let n2;

do{
    n1=parseInt(prompt('Introduce un numero entre 1 y 10'));

    if(n1>=1 && n1<=10){
        do{
            n2=parseInt(prompt('Introduce otro numero entre 1 y 10, diferente del anterior'));
        }while(n2<1 || n2>10 || n1===n2);
    }
}while(n1<1 || n1>10);

tablaMultiplicar(n1, n2);