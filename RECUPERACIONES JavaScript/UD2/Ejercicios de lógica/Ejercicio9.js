///////////////////////////////////////// TERMINAR

let entrada;
let parametros = [];

do{
    entrada = prompt('Introduce cualquier cosa. Introduce 0 para terminar');
    
    if(entrada != '0'){
        parametros.push(entrada);
        console.log(parametros);
    }else{
        console.log(parametrosPorTipo(parametros));
        
    }
    
}while(entrada != '0');

function parametrosPorTipo(params){
    let resultado = '';
    let tipo = [];

    for(p of params){
        resultado += typeof p + '\n'; 
    }

    return resultado;
}