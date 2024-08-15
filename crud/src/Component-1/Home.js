import {NavBar} from "./NavBar";
import {Outlet} from "react-router-dom";

export function Home(){
    return(
        <>
            <NavBar/>
            <hr/>
            <Outlet/>
        </>
    )
}