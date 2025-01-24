function Hijo({nombre='adoptado', fnllorar}){

    function handleClick(){
        fnllorar(`${nombre} dice: No quiero ir al cole`);
    }

    return(
        <><h3>Soy {nombre}</h3>
        <button onClick={handleClick}>Llorar a papa</button>
        </>
    );
}

export default Hijo;