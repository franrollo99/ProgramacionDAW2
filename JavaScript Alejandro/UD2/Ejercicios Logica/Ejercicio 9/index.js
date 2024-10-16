function agruparPorTipo(arrayParametros){

    for(let i=0; i<arrayParametros.length; i++){
        if(typeof arrayParametros[i])
        document.write(typeof arrayParametros[i] + "<br>");
    }

}

let arrayParametros=[2, 'hola', false, 2.3, 50, 'adios', true, 9, null]

agruparPorTipo(arrayParametros);