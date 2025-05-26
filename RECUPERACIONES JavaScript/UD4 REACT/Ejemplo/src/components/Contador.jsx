function Contador({suma, contador}){

    return (
        <>
            <button onClick={()=> suma(5)}>Suma</button>
            <div>{contador}</div>
        </>
    );
}

export default Contador;