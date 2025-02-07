import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import InicioPage from "../pages/InicioPage";
import PacientesPage from "../pages/PacientesPage";
import PropPacientePage from "../pages/PropPacientePage";
// import ExpedientesPage from "../pages/ExpedientesPage";
// import PropExpedientePage from "../pages/PropExpedientePage";
// import UsuariosPage from "../pages/UsuariosPage";
// import PropUsuarioPage from "../pages/PropUsuarioPage";
// import LoginLogoutPage from "../pages/LoginLogoutPage";
// import Errorpage.jsx from "../pages/Errorpage";

function AppEnrutador(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<InicioPage />} />
                    <Route path="pacientes" element={<PacientesPage />} />
                    <Route path="pacientes/propiedades/:id" element={<PropPacientePage />} />
                    {/* <Route path="expedientes" element={<ExpedientesPage />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppEnrutador;