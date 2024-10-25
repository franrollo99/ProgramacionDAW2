function comprobarAnagrama(palabra1, palabra2){
    if(palabra1===palabra2){
        alert('Las palabras no son anagramas porque son iguales');
    }else if(palabra1.length!==palabra2.length){
        alert('Las palabras no son anagramas porque tienen diferente numero de caracteres');
    }
}

function letrasPalabra(palabra1, palabra2){
    let letras1={};
    
    for(let i=0; i<palabra1.length; i++){
        letras1.palabra1[i]=palabra1[i].count;
    }
}

palabra1=prompt('Introduce una palabra');
palabra2=prompt('Introduce otra palabra');

comprobarAnagrama(palabra1, palabra2);