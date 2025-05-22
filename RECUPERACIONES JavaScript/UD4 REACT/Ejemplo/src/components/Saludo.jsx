function Saludo({nombre}){
    // if(!nombre){
    //     nombre = 'desconocido';
    // }

    // const nombreFinal = nombre ? nombre : "desconocido";


    return (
        <>
        <p>Hola {nombre || "desconocido"}</p>
        </>
    );
}

export default Saludo;