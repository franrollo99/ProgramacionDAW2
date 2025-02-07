import { useEffect, useState } from "react";
import $negocio from "../core/negocio.js";
// import ListaPacientes from "../components/ListaPacientes.jsx"
import "./ExpedientesPage.css";

function ExpedientesPage(){
    const [expediente, setExpediente] = useState([]);

    useEffect(()=>{
        getExpediente();
    }, []);

    const getExpediente = async()=>{
        try{
            const respuesta = await $negocio.obtenerExpediente();
            setExpediente(respuesta);
        }catch(e){
            console.log(e);
        }
    }


    return(<>
        
    </>)
}

export default ExpedientesPage;