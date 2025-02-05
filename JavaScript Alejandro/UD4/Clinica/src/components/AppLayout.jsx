import { Outlet } from "react-router-dom";
import AppMenu from "./AppMenu";
import "./AppLayout.css";

function Applayout(){
    return(<>
        <AppMenu />
        <main>
            <Outlet />
        </main>
    </>);
}

export default Applayout;