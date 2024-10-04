function cuentaCaracteres(cadena){
        let contador={}; //Creamos un diccionario para almacenar las apariciones de cada caracter

        //Recorremos cada caracter de la cadena
        for(let caracter of cadena){
            //Si el caracter ya existe en el diccionario incrementamos su contador
            if(contador[caracter]){
                contador[caracter]++;
            }else{
                contador[caracter]=1;
            }
        }

        return contador;
}

console.log(cuentaCaracteres("Mi nombre es fran y tengo 24 años, un saludo"));