import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import InicioPage from "../pages/InicioPage";
import PacientesPage from "../pages/PacientePage";
import PropPacientePage from "../pages/PropPacientePage";
import ExpedientesPage from "../pages/ExpedientesPage";
import PropExpedientePage from "../pages/PropExpedientePage";
import UsuariosPage from "../pages/UsuariosPage";
import PropUsuarioPage from "../pages/PropUsuarioPage";
import LoginLogoutPage from "../pages/LoginLogoutPage";
import Errorpage.jsx from "../pages/Errorpage";

function AppEnrutador(){
    return(
        <BrowserRouter>
            <Routes>
                <Route >

                </Route>
            </Routes>
        </BrowserRouter>
    )
}