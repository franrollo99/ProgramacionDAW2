let numeros = [];
let numeroIntroducido;

// do{
//     numeroIntroducido = prompt('Introduzca un número');

//     if(isNaN(numeroIntroducido)){
//         alert('Debes introducir un numero');
// 0   }if(!isNaN(numeroIntroducido) && numeroIntroducido != 0){
//         numeros.push(numeroIntroducido);
//     }

// }while(numeroIntroducido != '0');

do{
    numeroIntroducido = parseInt(prompt('Introduzca un número'));


    if(isNaN(numeroIntroducido)){
        alert('Debes introducir un numero');
    }if(!isNaN(numeroIntroducido) && numeroIntroducido !== 0){
        numeros.push(numeroIntroducido);
    }

}while(numeroIntroducido !== 0);

if(numeros.length > 0){
    console.log(numeros);
}else{
    console.log('No has introducido ningun numero');
}


