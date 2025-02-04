import { Outlet } from "react-router-dom";
import AppMenu from "./AppMenu";

function Applayout(){
    return(<>
        <AppMenu />
        <main>
            <Outlet />
        </main>
    </>);
}

export default Applayout;