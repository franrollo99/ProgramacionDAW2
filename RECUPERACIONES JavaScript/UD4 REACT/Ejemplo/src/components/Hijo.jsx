function Hijo({mensaje, enviarMensaje}){
    return(
        <>
        <button onClick={enviarMensaje}>Recibir mensaje</button>
        <div>{mensaje}</div>
        </>
    );
}

export default Hijo;