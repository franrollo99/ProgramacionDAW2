import Crupier from './Crupier.jsx';
import Jugador from './Jugador.jsx';
import './estilo.css';

function Mesa(){

    return(
        <>
            <div className='tablero'>
                <h1>Siete y medio</h1>
                <button>Comenzar partida</button>
                <Crupier />
                <Jugador />
            </div>
        </>
    );
}

export default Mesa;