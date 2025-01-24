import {useState} from 'react'
import './App.css'
import {Cuadrado} from './components/cuadrados.jsx'

// Solo puedo hacer una exportacion por defecto por archivo
export default function Tablero(){
    // cuadrados es una constante que almacena en este caso un array de 9 valores null
    // setCuadrados es una funcion que actualiza el estado de cuadrados cada vez que se llama
    // Actualiza el valor de cuadrados y renderiza nuevamente el componente para reflejar los cambios
    // useState es una funcion de React que inicia un estado con el valor que se pasa por argumento
    const[cuadrados, setCuadrados] = useState(Array(9).fill(null));

    // TURNOS

    function hadleClick(i){
        const siguienteCuadrado = cuadrados.slice();
        siguienteCuadrado[i] = 'X';
        setCuadrados(siguienteCuadrado);
    }

    return (
        <>
            <div className='contenedorPrincipal'>
                <h1>Juego de 3 en raya</h1>
                <div className='tablero'>
                    <Cuadrado valor={cuadrados[0]} clickCuadrado={() => hadleClick(0)} />
                    <Cuadrado valor={cuadrados[1]} clickCuadrado={() => hadleClick(1)} />
                    <Cuadrado valor={cuadrados[2]} clickCuadrado={() => hadleClick(2)} />
                    <Cuadrado valor={cuadrados[3]} clickCuadrado={() => hadleClick(3)} />
                    <Cuadrado valor={cuadrados[4]} clickCuadrado={() => hadleClick(4)} />
                    <Cuadrado valor={cuadrados[5]} clickCuadrado={() => hadleClick(5)} />
                    <Cuadrado valor={cuadrados[6]} clickCuadrado={() => hadleClick(6)} />
                    <Cuadrado valor={cuadrados[7]} clickCuadrado={() => hadleClick(7)} />
                    <Cuadrado valor={cuadrados[8]} clickCuadrado={() => hadleClick(8)} />
                </div>
            </div>
        </>
    )
}