import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Mantenimiento from "../pages/Mantenimiento";
import CocheDetalle from "../pages/CocheDetalle";
import Login from "../pages/Login";
import Error404 from "../pages/Error404";
import Navbar from "../components/Navbar";

function AppRouter() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mantenimiento" element={<Mantenimiento />} />
                <Route path="/coche/:id" element={<CocheDetalle />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
