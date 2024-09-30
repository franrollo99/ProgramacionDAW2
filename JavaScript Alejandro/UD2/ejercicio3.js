function dibujarRectangulo(n) {
    let rectangulo = [];

    // Validar que el número sea mayor o igual a 2 para poder dibujar un rectángulo hueco
    if (n < 2) {
        return ["El número debe ser mayor o igual a 2"];
    }

    // Primera fila (completamente llena)
    rectangulo.push('*'.repeat(n));

    // Filas intermedias (huecas)
    for (let i = 0; i < n - 2; i++) {
        rectangulo.push('*' + ' '.repeat(n - 2) + '*');
    }

    // Última fila (completamente llena, igual que la primera)
    rectangulo.push('*'.repeat(n));

    return rectangulo;
}

// Código auxiliar para probar la función
let numero = 5; // Puedes cambiar este número para probar con otros valores
let rectanguloHueco = dibujarRectangulo(numero);

// Mostrar el rectángulo en la consola
rectanguloHueco.forEach(linea => console.log(linea));