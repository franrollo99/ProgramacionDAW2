import {useState, useEffect} from 'react'
import './tablero.css'
import Casilla from './casilla.jsx'

// Solo puedo hacer una exportacion por defecto por archivo
function Tablero(){

    // cuadrados es una constante que almacena en este caso un array de 9 valores null
    // setCuadrados es una funcion que actualiza el estado de cuadrados cada vez que se llama
    // Actualiza el valor de cuadrados y renderiza nuevamente el componente para reflejar los cambios
    // useState es una funcion de React que inicia un estado con el valor que se pasa por argumento
    const[casillas, setCasilla] = useState(Array(9).fill(null));
    const [siguienteX, setSiguienteX] = useState(true);
    

    function handleClick(i){

        if(casillas[i] || calcularGanador(casillas)){
            return;
        }

        const siguienteCuadrado = casillas.slice();

        if(siguienteX){
            siguienteCuadrado[i] = "x";
        }else{
            siguienteCuadrado[i] = "o";
        }
        
        setCasilla(siguienteCuadrado);
        setSiguienteX(!siguienteX);
    }


    let estado;
    const [xGanador, setXGanador] = useState(0);
    const [oGanador, setOGanador] = useState(0);
    // Si gandor tiene un valor que no sea null se da como ganador al valor "x" o "o"
    const ganador = calcularGanador(casillas, estado);


    // EXPLICACION
    useEffect(() => {
        if (ganador === 'x') {
            setXGanador((prev) => prev + 1);
        } else if (ganador === 'o') {
            setOGanador((prev) => prev + 1);
        }
    }, [ganador]);
    
    if(ganador){
        estado = "Ganador: " + ganador;
       
    }else{
        // Compruebo si el valor null esta presente en el array
        // Si es que no significa que no queda ningun hueco por rellenar y si no ha habido ganador se da empate
        if (!casillas.includes(null)) {
            estado = 'Empate';
        }else{
            estado = "Siguiente jugador: " + (siguienteX ? "x" : "o")
        }
    }

    function reset(){
        setCasilla(Array(9).fill(null));
    }

    return (
        <>
            <div className="contenedorPrincipal">
                <h1>Juego de 3 en raya</h1>
                <div className="tablero">
                <div className="tablero">
                    <div className='fila'>
                        <Casilla valor={casillas[0]} clickCuadrado={() => handleClick(0)}/>
                        <Casilla valor={casillas[1]} clickCuadrado={() => handleClick(1)}/>
                        <Casilla valor={casillas[2]} clickCuadrado={() => handleClick(2)}/>
                    </div>
                    <div className='fila'>
                        <Casilla valor={casillas[3]} clickCuadrado={() => handleClick(3)}/>
                        <Casilla valor={casillas[4]} clickCuadrado={() => handleClick(4)}/>
                        <Casilla valor={casillas[5]} clickCuadrado={() => handleClick(5)}/>
                    </div>
                    <div className='fila'>
                        <Casilla valor={casillas[6]} clickCuadrado={() => handleClick(6)}/>
                        <Casilla valor={casillas[7]} clickCuadrado={() => handleClick(7)}/>
                        <Casilla valor={casillas[8]} clickCuadrado={() => handleClick(8)}/>
                    </div>
                </div>
                </div>
                <h2>{estado}</h2>
                <button className="reset" onClick={reset}>Volver a empezar</button>
                <div>
                    <h2>Estadisticas</h2>
                    <p>Nº veces ganador x: {xGanador}</p>
                    <p>Nº veces ganador o: {oGanador}</p>
                </div>
            </div>
        </>
    )
}

function calcularGanador(cuadrados){

    // matriz con posibles combinaciones ganadoras
    const lineas = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for(let i = 0; i < lineas.length; i++){
        const [a, b, c] = lineas[i];

        // comprueba si la casilla en indice "a" no esta vacia, para evitar dar un ganador con casillas vacias
        // tambien comprueba si la casilla "b" y "c" tienen el mismo simbolo "x" o "o" que la casilla "a"
        // en caso de que se cumplan todas las condiciones devuelve el valor de esas casillas
        if(cuadrados[a] && cuadrados[a] === cuadrados[b] && cuadrados[a] === cuadrados[c]){
            return cuadrados[a]; 
        }
    }
    return null;
}

export default Tablero;