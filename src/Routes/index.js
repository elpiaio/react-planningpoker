import { Routes as RoutesComponent, Route } from "react-router-dom";
import LoginComponents from "../Pages/Login";

export const Routes = () => {
    return (
        <RoutesComponent>
            <Route path="/Home" />
            <Route path="/CreateRoom" />
            <Route path="/CreateAccount" />
            <Route path="/Login" />
            <Route path="/Lobby" />
        </RoutesComponent>
    );
}
