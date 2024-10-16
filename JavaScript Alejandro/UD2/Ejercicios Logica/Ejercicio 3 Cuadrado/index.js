function CuadradoloHueco(lado){
    let resultado=[];
    for(let i=0; i<lado; i++){
        for(let h=0; h<lado; h++){
            if(i===0 || i===lado-1 || h===0 || h===lado-1){
                resultado+='* ';
            }else{
                resultado+='  ';
            }
        }
        resultado+='\n';
    }

    return resultado;
}

let lado=prompt('Introduce el tamaño del lado');

console.log(CuadradoloHueco(lado));