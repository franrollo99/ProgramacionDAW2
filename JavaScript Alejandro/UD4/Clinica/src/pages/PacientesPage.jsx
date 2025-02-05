import { useEffect, useState } from "react";
import $negocio from "../core/negocio.js";
import ListaPacientes from "../components/ListaPacientes.jsx"
import "./PacientesPage.css";

function Pacientespage(){
    const [pacientes, setPacientes] = useState([]);

    useEffect(()=>{
        getPacientes();
    }, []);

    const getPacientes = async()=>{
        try{
            const respuesta = await $negocio.obtenerPacientes();
            setPacientes(respuesta);
        }catch(e){
            console.log(e);
        }
    }


    return(<>
        <h1>Pagina de pacientes</h1>
        <div className="tablaPacientes">
            <div className="cabeceraTablaPacientes">
                <h3><strong>NOMBRE</strong></h3>
                <h3><strong>DNI</strong></h3>
                <h3><strong>ACCIONES</strong></h3>
            </div>
            {pacientes.map((cadaPaciente)=>{
                // return cadaPaciente.nombre;
                return (<ListaPacientes key={cadaPaciente.id} paciente={cadaPaciente} />);
            })}
        </div>
        

    </>)
}

export default Pacientespage;