const $bingo = function () {
    let cartones = {
        jugador1: [],
        jugador2: [],
        humano: []
    };

    let bolasDesordenadas = [];

    function inicializarPartida() {
        /*
        for(let jugador in  cartones){
        cartones[jugador]=generarCarton();
        }
        */
        cartones.jugador1 = generarCarton();
        cartones.jugador2 = generarCarton();
        cartones.humano = generarCarton();
        let bolasSacadas = [];
        for (let bola = 1; bola <= 90; bola++) {
            bolasDesordenadas[bola] = bola;
        }
        bolasSacadas.sort((a, b) => {
            return Math.random() - 0.5;
        });
    }

    function generarCarton() {
        let carton = [];
        for (let columna = 0; columna < 9; columna++) {
            let bolas = new Set();
            let decena = columna * 10;
            while (bolas.size < 3) {
                let unidad = numeroAleatorio(1, 10);
                let bola = decena + unidad;
                bolas.add(bola);
            }
            let bolasOrdenadas = [...bolas];
            bolasOrdenadas.sort();
            for (let fila = 0; fila < 3; fila++) {
                carton[fila][columna] = {
                    valor: bolasOrdenadas[fila],
                    marcado: false
                }
            }
        }
        for (let col = 0; col < 9; col++) {
            let aleatorio = numeroAleatorio(0, 2);
            carton[col][aleatorio] = {
                valor: "*",
                marcado: true
            };
            let bolas = new Set();
            while (bolas.size < 3) {
                numAleat = numeroAleatorio(0, 8);
                bolas.add(aleatorio);
            }
        }
        let arrayCol = [...bolas];
        for (col of arrayCol) {
            if (carton[0][col].marcado === true) {
                carton[1][col] = {
                    valor: "*",
                    marcado: true
                };
            } else {
                carton[0][col] = {
                    valor: "*",
                    marcado: true
                };
            }
        }


    }
    function numeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }


}