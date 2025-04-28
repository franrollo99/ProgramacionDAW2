let entrada;
let parametros = [];

do {
    entrada = prompt('Introduce cualquier cosa. Introduce 0 para terminar');

    if (entrada != '0') {
        parametros.push(entrada);
    } else {
        if (parametros.length > 0) {
            console.log(parametrosPorTipo(parametros));
        } else {
            console.log('No has introducido ningun parametro');
        }
    }

} while (entrada != '0');

function parametrosPorTipo(params) {
    let resultado = '';
    let tipo = new Object();
    let claveTipo;

    for (p of params) {
        if (p === 'true' || p === 'false') {
            claveTipo = 'Boolean';
        } else if (!isNaN(parseInt(p))) {
            claveTipo = 'Number';
        } else {
            claveTipo = typeof p; // Puede ser Object si es null, o String si es una cadena
        }

        if (!tipo[claveTipo]) tipo[claveTipo] = [];

        tipo[claveTipo].push(p);
    }

    for (let clave in tipo) {
        resultado += `Tipo ${clave}:`;

        // Tambien se puede hacer con tipo[clave].forEach((valor, indice) => {...});
        for (let [indice, valor] of tipo[clave].entries()) { // entries me devuelve un iterador con los pares clave, valor
            resultado += `\n${indice}: ${valor}`;
        }

        resultado += '\n\n';
    }

    return resultado;;
}