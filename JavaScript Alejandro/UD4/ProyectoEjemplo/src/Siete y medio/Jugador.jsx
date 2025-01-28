import './estilo.css';

function Jugador(acumulado){

    return(
            <div className="tableroSeccion">
                <h2>Jugador</h2>
                <h3>Acumulado: {acumulado}</h3>
                <div></div>
                <div>
                    <button>Dame carta</button>
                    <button>Me planto</button>
                </div>
            </div>
    );
}

export default Jugador;