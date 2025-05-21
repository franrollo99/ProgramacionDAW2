function Casilla({numFila, numColumna, value, avisarTablero}) {

    const handleClick = () => {
        avisarTablero(numFila, numColumna);
    }

    return (
        <>
            <div className="casilla" onClick={handleClick}>{value}</div>
        </>
    );
}

export default Casilla;