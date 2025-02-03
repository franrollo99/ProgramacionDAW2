import { useState } from "react";
import $negocio from "../services/negocio";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const usuario = await $negocio.validarUsuario(username, password);
        if (usuario) {
            localStorage.setItem("usuario", JSON.stringify(usuario));
            navigate("/mantenimiento");
        } else {
            alert("Credenciales incorrectas");
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Usuario" onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
}

export default Login;
