let entrada;
let apariciones;
let resultado = '';

entrada = prompt('Introduce una cadena de texto');

apariciones = aparicionesCaracteres(entrada);

for(let clave in apariciones){
    resultado += `${clave}: ${apariciones[clave]} \n`;
}

console.log(resultado);

function aparicionesCaracteres(cadena)
{
    let contadorCaracteres = new Object();

    for(caracter of cadena){
        if(!contadorCaracteres[caracter]){
            contadorCaracteres[caracter] = 1;
        }else{
            contadorCaracteres[caracter]++;
        }
    }
    return contadorCaracteres;

}