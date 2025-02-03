import {useState} from "react";
import {Navigate, useNavigate} from "react-router-dom";

function AdministracionPage(){
    const [tienePermisos, setTienePermisos] = useState(true);
    const navegar = useNavigate();

    if(!tienePermisos){
        return <Navigate to="/" />;
    }

    const handleClick = ()=>{
        if(confirm("Ir a inicio")){
            navegar("/");
        }
    };

    return(
        <>
            <h1>Página de administración</h1>
            <button onClick={handleClick}>Volver a inicio</button>
        </>
    );
}

export default AdministracionPage;