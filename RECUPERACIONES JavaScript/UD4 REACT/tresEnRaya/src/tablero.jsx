import './Tablero.css';
import Casilla from './Casilla.jsx';
import { useState } from "react";

function Tablero() {

  // Array bidimensional 
  const [tablero, setTablero] = useState(Array(3).fill(null).map(() => Array(3).fill(null)));
  const [valor, setValor] = useState('x');

  const marcarCasilla = async (fila, columna) => {
    const nuevoTablero = tablero.map(fila => [...fila]);

    if (!tablero[fila][columna]) {
      nuevoTablero[fila][columna] = valor;
      setTablero(nuevoTablero);

      const ganador = comprobarGanador(nuevoTablero);

      if (ganador) {
        alert(`¡Ha ganado ${ganador.toUpperCase()}!`);
        return;
      }

      setValor(valor === 'x' ? 'o' : 'x');
    }
  };

  function comprobarGanador(tablero) {
  // Comprobar filas
  for (let i = 0; i < 3; i++) {
    if (tablero[i][0] && tablero[i][0] === tablero[i][1] && tablero[i][1] === tablero[i][2]) {
      return tablero[i][0];
    }
  }

  // Comprobar columnas
  for (let j = 0; j < 3; j++) {
    if (tablero[0][j] && tablero[0][j] === tablero[1][j] && tablero[1][j] === tablero[2][j]) {
      return tablero[0][j];
    }
  }

  // Comprobar diagonal principal
  if (tablero[0][0] && tablero[0][0] === tablero[1][1] && tablero[1][1] === tablero[2][2]) {
    return tablero[0][0];
  }

  // Comprobar diagonal inversa
  if (tablero[0][2] && tablero[0][2] === tablero[1][1] && tablero[1][1] === tablero[2][0]) {
    return tablero[0][2];
  }

  // Si no hay ganador
  return null;
}

  const reiniciarTablero = () => {
    const nuevoTablero = Array(3).fill(null).map(() => Array(3).fill(null));

    setTablero(nuevoTablero);
  };

  return (
    <>
      <div className='tablero'>
        <div className='fila'>
          <Casilla numFila={0} numColumna={0} value={tablero[0][0]} avisarTablero={marcarCasilla} />
          <Casilla numFila={0} numColumna={1} value={tablero[0][1]} avisarTablero={marcarCasilla} />
          <Casilla numFila={0} numColumna={2} value={tablero[0][2]} avisarTablero={marcarCasilla} />
        </div>
        <div className='fila'>
          <Casilla numFila={1} numColumna={0} value={tablero[1][0]} avisarTablero={marcarCasilla} />
          <Casilla numFila={1} numColumna={1} value={tablero[1][1]} avisarTablero={marcarCasilla} />
          <Casilla numFila={1} numColumna={2} value={tablero[1][2]} avisarTablero={marcarCasilla} />
        </div>
        <div className='fila'>
          <Casilla numFila={2} numColumna={0} value={tablero[2][0]} avisarTablero={marcarCasilla} />
          <Casilla numFila={2} numColumna={1} value={tablero[2][1]} avisarTablero={marcarCasilla} />
          <Casilla numFila={2} numColumna={2} value={tablero[2][2]} avisarTablero={marcarCasilla} />
        </div>
      </div>
      <button onClick={reiniciarTablero}>Reiniciar</button>
    </>
  );
}

export default Tablero;
