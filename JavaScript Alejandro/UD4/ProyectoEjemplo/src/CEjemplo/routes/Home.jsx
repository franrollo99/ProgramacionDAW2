import { useEffect, useState } from "react";
import $negocio from "../services/negocio";
import CocheCard from "../components/CocheCard";

function Home() {
    const [coches, setCoches] = useState([]);

    useEffect(() => {
        $negocio.obtenerCoches("", 0, 6).then(setCoches);
    }, []);

    return (
        <div>
            <h1>Bienvenido al Concesionario</h1>
            <div className="coches-grid">
                {coches.map((coche) => (
                    <CocheCard key={coche.id} coche={coche} />
                ))}
            </div>
        </div>
    );
}

export default Home;
