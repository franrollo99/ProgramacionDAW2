function agruparPorTipo(...args){
    let diccionario={}; // Creamos un diccionario (objeto JSON)

    //Se recorre cada elemento del array args
    for(let i=0; i<args.length; i++){
        let tipo=typeof args[i]; //Guarda en la variable tipo el tipo de variable de cada argumento

        //Si no existe una coleccion para este tipo la inicializamos
        if(!diccionario[tipo]){
            diccionario[tipo]=[];
        }

        diccionario[tipo].push({valor: args[i], posicion: i}); //Agregamos los pares clave-valor al diccionario (clave: valor y posicion; valor: args[i] y i)
    }

    for(let tipo in diccionario){ //Bucle para recorrer las propiedades del objeto diccionario
        console.log('Tipo: ' + tipo);

        for(let i=0; i<diccionario[tipo].length; i++){
            let elemento=diccionario[tipo][i];
            console.log('Valor: ' + elemento.valor + ', Posicion: ' + elemento.posicion);
        }
    }
}

agruparPorTipo(1, "hola", 5, false, "mundo", true, 0.5);