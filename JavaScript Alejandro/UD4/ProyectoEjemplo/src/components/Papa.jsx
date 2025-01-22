import Hijo from './Hijo'

const dimeHijo = (mensaje)=>{
    console.log(mensaje);
}

function Papa({nombre, children}){
    return(<div>
        <h1>Yo soy tu padre</h1>
        {<Hijo nombre='Diego' fnllorar={dimeHijo}/>}
        {<Hijo nombre='Paqui'/>}

        <h2>Pendientes</h2>
        {children}
    </div>);
}

export default Papa;