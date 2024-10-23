const $bingo=(function(){
    
    let datosMarcador=[];
    let cartones=[];
    let bolasSacadas=[];
    let bolasDisponibles=[];

    // Solo llena el saco de bolas si no hay ninguna bola dentro (o el juego acaba de empezar)
    // Llena 90 bolas de 1 a 90, y luego las desordena de forma aleatoria
    // Saca una bola y la mete en el array bolas sacadas
    function siguientBola(){
        if(bolasDisponibles.length===0){
            for (let i=1; i<=90; i++){
                bolasDisponibles.push(i);
            }
    
            bolasDisponibles.sort(()=>Math.random()-0.5);
        }

        let bola=bolasDisponibles.shift();
        bolasSacadas.push(bola);
        return bola;
    }

    function generarCarton(){
        let carton=[[], [], []];
        let decenas=[];

        // Generamos los numeros de cada decena
        for(let i=0; i<9; i++){
            decenas.push(generarDecenas(i*10+1, (i+1)*10));
        }

    }

    function generarDecenas(min, max){
        let numeros=[];
        let numerosDesordenados=[];

        for(let i=min; i<=max; i++){
            numeros.push(numeros);
        }

        numerosDesordenados=numeros.sort(()=>Math.random()-0.5);

        return 
    }

    return ;
})();


// function generarCarton() {
//     let carton = [[], [], []]; // Inicializamos el cartón como 3 filas vacías
//     let decenas = [];
    
//     // Generamos los números de cada decena
//     for (let i = 0; i < 9; i++) {
//         decenas.push(generarNumerosDecena(i * 10 + 1, (i + 1) * 10));
//     }

//     // Llenar las columnas con los números generados
//     for (let i = 0; i < 9; i++) {
//         let indices = obtenerIndicesAleatorios(3, 2); // Obtener 1 o 2 índices aleatorios
//         for (let j = 0; j < indices.length; j++) {
//             carton[indices[j]][i] = decenas[i][j]; // Asignar números en la columna correspondiente
//         }
//     }

//     return carton;
// }

// function generarNumerosDecena(min, max) {
//     let numeros = [];
//     for (let i = min; i <= max; i++) {
//         numeros.push(i);
//     }
//     return numeros.sort(() => Math.random() - 0.5).slice(0, 2); // Extraer 1 o 2 números aleatorios
// }

// function obtenerIndicesAleatorios(total, limite) {
//     let indices = [];
//     while (indices.length < total) {
//         let index = Math.floor(Math.random() * limite);
//         if (!indices.includes(index)) indices.push(index);
//     }
//     return indices.sort((a, b) => a - b);
// }