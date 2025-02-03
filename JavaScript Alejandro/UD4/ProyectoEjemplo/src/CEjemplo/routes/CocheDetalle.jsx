import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import $negocio from "../services/negocio";

function CocheDetalle() {
    const { id } = useParams();
    const [coche, setCoche] = useState(null);

    useEffect(() => {
        $negocio.obtenerCoche(id).then(setCoche);
    }, [id]);

    if (!coche) return <p>Cargando...</p>;

    return (
        <div>
            <h1>{coche.marca} {coche.modelo}</h1>
            <p>Año: {coche.anno}</p>
            <p>Precio: {coche.precio}€</p>
            <p>Estado: {coche.estado}</p>
        </div>
    );
}

export default CocheDetalle;
