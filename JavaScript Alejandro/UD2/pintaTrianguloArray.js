function pintaTriangulo(altura) {
    let resultado = new Array(altura); // Creamos el array con la cantidad de filas=altura

    for (let i = 0; i < altura; i++) {
        let fila = new Array(2 * altura - 1); // Creamos el array para cada fila con tamaño máximo del triángulo

        // Inicializamos toda la fila con espacios en blanco
        for (let col = 0; col < fila.length; col++) {
            fila[col] = ' ';
        }

        // Añadimos los asteriscos
        for (let col = altura - i - 1; col < altura + i; col++) {
            fila[col] = '*';
        }

        // Construimos la cadena de texto manualmente
        let filaTexto = '';
        for (let col = 0; col < fila.length; col++) {
            filaTexto += fila[col]; // Concatenamos cada elemento de la fila a la cadena
        }

        resultado[i] = filaTexto; // Almacenamos la fila construida en el array resultado
    }

    return resultado; // Devolvemos el array con las filas del triángulo
}

// Imprimir el triángulo
let triangulo = pintaTriangulo(5);
for (let fila of triangulo) {
    console.log(fila); // O puedes usar document.write para mostrarlo en la web
}