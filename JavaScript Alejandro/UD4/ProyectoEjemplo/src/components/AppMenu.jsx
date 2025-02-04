import {Link} from "react-router-dom";
import "./AppMenu.css";

function AppMenu({ children }) {
    return (
        <div>
            <nav>
                <a href="/">Inicio</a>
                <a href="/lista">Lista</a>
                <a href="/administracion">Administración</a>
            </nav>
            {children} {/* Aquí se renderiza `Outlet` */}
        </div>
    );
}

export default AppMenu;
