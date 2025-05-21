import './Tablero.css';
import Casilla from './Casilla.jsx';
import { useState } from "react";

function Tablero() {

  // Array bidimensional 
  const [tablero, setTablero] = useState([[], [], []]);
  const [valor, setValor] = useState('x');

  const marcarCasilla = async (fila, columna) => {
    // Compruebo si esta marcado
    if(!tablero[fila][columna]){
      tablero[fila][columna] = valor;
  
      if (valor === 'x') {
        setValor('o');
      } else {
        setValor('x');
      }
    }
  }

  return (
    <div className='tablero'>
      <div className='fila'>
        <Casilla numFila='0' numColumna='0' value={tablero[0][0]} avisarTablero={marcarCasilla} />
        <Casilla numFila='0' numColumna='1' value={tablero[0][1]} avisarTablero={marcarCasilla} />
        <Casilla numFila='0' numColumna='2' value={tablero[0][2]} avisarTablero={marcarCasilla} />
      </div>
      <div className='fila'>
        <Casilla numFila='1' numColumna='0' value={tablero[1][0]} avisarTablero={marcarCasilla} />
        <Casilla numFila='1' numColumna='1' value={tablero[1][1]} avisarTablero={marcarCasilla} />
        <Casilla numFila='1' numColumna='2' value={tablero[1][2]} avisarTablero={marcarCasilla} />
      </div>
      <div className='fila'>
        <Casilla numFila='2' numColumna='0' value={tablero[2][0]} avisarTablero={marcarCasilla} />
        <Casilla numFila='2' numColumna='1' value={tablero[2][1]} avisarTablero={marcarCasilla} />
        <Casilla numFila='2' numColumna='2' value={tablero[2][2]} avisarTablero={marcarCasilla} />
      </div>
    </div>
  );
}

export default Tablero;
