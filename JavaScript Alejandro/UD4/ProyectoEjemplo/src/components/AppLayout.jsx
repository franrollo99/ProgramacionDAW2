import {Outlet} from "react-router-dom";
import AppMenu from "./AppMenu";

function AppLayout(){
    return(<>
        <AppMenu>
            <main>
                <Outlet />
            </main>
        </AppMenu>
    </>)
}

export default AppLayout;