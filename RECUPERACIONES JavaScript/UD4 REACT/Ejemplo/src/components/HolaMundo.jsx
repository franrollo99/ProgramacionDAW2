import { useState } from "react";

function HolaMundo(){
    const [mensaje, setMensaje] = useState("Hola Mundo");
    const [mostrar, setMostrar] = useState(true);

    const handlerClick = () => {
        setMostrar(!mostrar);
    };

    return (
        <>
            <h1>{mostrar ? mensaje : "¿No me dices nada?"}</h1>
            <button onClick={handlerClick}>
                {mostrar ? "Ocultar mensaje" : "Mostrar mensaje"}
            </button>
        </>
    );
}

export default HolaMundo;