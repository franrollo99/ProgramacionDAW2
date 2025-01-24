import {useState} from 'react'

export function Cuadrado({valor, clickCuadrado}){
    // const [valor, setValor] = useState(null);

    // function handleClick(){
    //     setValor('X')
    // }

    return <button className='cuadrado' onClick={clickCuadrado}>{valor}</button>
}