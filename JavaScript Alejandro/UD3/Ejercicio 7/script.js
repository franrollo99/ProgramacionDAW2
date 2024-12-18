function validarNombre(nombre, callback){
    // isNaN devuelve false en caso de que la conversion de nombre a entero se realice con exito
    // if(nombre.length > 2 && isNaN(parseInt(nombre))){}

    const contieneNumeros = /\d/; //Expresion regularpara comprobar si tiene numeros
    if(contieneNumeros.test(nombre) && nombre.length > 2){
        return callback('Resultado correcto', null);
    }else{
        return callback(null, 'Resultado incorrecto');
    }
}

validarNombre(nombre.value, function (resultadoCorrecto, resultadoErroneo){
    if(resultadoCorrecto){

    }
    if(resultadoErroneo){

    }
});

function validarContraseña(contraseña, callback){

    if(contraseña.length > 7 && )
}