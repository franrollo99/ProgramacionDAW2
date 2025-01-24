import {useState} from 'react'

function Casilla({valor, clickCuadrado}){
    return <div className="casilla" onClick={clickCuadrado}>{valor}</div>
}

export default Casilla;