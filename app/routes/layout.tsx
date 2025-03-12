import { Outlet } from "react-router";
import { Navbar } from "../components"

export default function Layout() {
    return (<>
        <Navbar/>
        <Outlet context={2}/>
    </>);
}