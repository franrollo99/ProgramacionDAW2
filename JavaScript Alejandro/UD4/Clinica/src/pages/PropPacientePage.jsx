import { useNavigate, useParams } from "react-router-dom";
import $negocio from "../core/negocio.js";
import { useEffect, useState } from "react";

function PropPacientesPage() {
    const { id } = useParams();
    const [paciente, setPaciente] = useState();
    // const navegar = useNavigate();

    useEffect(() => {
        cargarDatos(id);
    }, [id]);

    const cargarDatos = async (id) => {
        try {
            let respuesta = await $negocio.obtenerPaciente(id);
            setPaciente(respuesta);
        } catch (e) {
            console.log(e);
        }
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     enviarDatos();
    // };
    // const enviarDatos = async () => {
    //     try {
    //         await negocio.actualizarModulo(modulo);
    //         navegar("/lista");
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };
    // const handleChange = (e) => {
    //     /* Target es de tipo input, el nombre y el valor están disponibles */
    //     const { name, value } = e.target;
    //     let actualizado = { ...modulo, [name]: value };
    //     setModulo(actualizado);
    // };

    return (
        <>
            <h1>Página de detalles</h1>
            
        </>
    );
}

export default PropPacientesPage;