import { useEffect, useState } from "react";
import $negocio from "../core/negocio.js";
import ListaPacientes from "../components/ListaPacientes.jsx"
import "./PacientesPage.css";
import { Link } from "react-router-dom";

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
        <div><Link to="/crearPacientes">Crear Paciente</Link> </div>

        <label htmlFor="buscarPaciente">Buscar paciente</label>
        <input type="text" name="buscarPaciente" id="buscarPaciente" />

        <div className="tablaPacientes">
            <div className="cabeceraTablaPacientes">
                <h3><strong>NOMBRE</strong></h3>
                <h3><strong>DNI</strong></h3>
                <h3><strong>ACCIONES</strong></h3>
            </div>
            {pacientes.map((cadaPaciente)=>{
                return (<ListaPacientes key={cadaPaciente.id} paciente={cadaPaciente}/>);
            })}
        </div>
        

    </>)
}

export default Pacientespage;