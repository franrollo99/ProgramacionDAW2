import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from '../components/AppLayout';
import HomePage from '../pages/HomePage';
import PacientesPage from '../pages/PacientesPage';
import PacientePage from '../pages/PacientePage';
import ExpedientesPage from '../pages/ExpedientesPage';
import ExpedientePage from '../pages/ExpedientePage';
import UsuariosPage from '../pages/UsuariosPage';
import UsuarioPage from '../pages/UsuarioPage';
import NoPage from '../pages/NoPage';

function AppEnrutador(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="pacientes" element={<PacientesPage />} />
                    <Route path="paciente/:id" element={<PacientePage />} />
                    <Route path="expedientes" element={<ExpedientesPage />} />
                    <Route path="expediente/:id" element={<ExpedientePage />} />
                    <Route path="usuarios" element={<UsuariosPage />} />
                    <Route path="usuario/:id" element={<UsuarioPage />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppEnrutador;