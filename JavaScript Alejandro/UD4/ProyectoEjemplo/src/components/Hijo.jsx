function Hijo({nombre='adoptado', fnllorar}){
    // const {nombre} = PaymentResponse;

    function handleClick(){
        fnllorar(`${nombre} dice: No quiero ir al cole`);
    }

    return(
        <><h3>Soy {nombre}</h3>
        {/* <p>No quiero ir al cole</p> */}
        <button onClick={handleClick}>Llorar a papa</button>
        </>
    );
}

export default Hijo;