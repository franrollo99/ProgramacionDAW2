import {useContext, useStat} from "react";
import {SeguridadContext} from "../context/SeguridadProvider";

function HomePage(){
    const {datos, logIn, logOut} = useContext(SeguridadContext);
    const [nombre, setNombre] = useStat("");

    function handleClick(){
        if(datos.tienePermisos){
            setNombre("");
            logOut();
        }else{
            if(nombre == ""){
                return;
            }
            logIn(nombre);
        }
    }

    const handleChange = (e) =>{
        setNombre(e.target.value);
    }

    return (
        <>
            <h1>Pagina de inicio</h1>
            <div>
                {datos.tienePermisos ?(
                    <>
                        <span>Hola {datos.usuario}</span>
                        <button>Salir</button>
                    </>
                ):(
                    <>
                        <span>Nombre: </span>
                        <input type="text" name="nombre" value={nombre} onChange={handleChange}/>
                        <button onClick={handleClick}>Entrar</button>
                    </>
                )}
            </div>
        </>
    )
}

export default HomePage;