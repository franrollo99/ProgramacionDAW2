import { useEffect, useState } from "react";
import $negocio from "../services/negocio";
import CocheList from "../components/CocheList";

function Mantenimiento() {
    const [coches, setCoches] = useState([]);

    useEffect(() => {
        $negocio.obtenerCoches().then(setCoches);
    }, []);

    return (
        <div>
            <h1>Administración de Coches</h1>
            <CocheList coches={coches} />
        </div>
    );
}

export default Mantenimiento;
