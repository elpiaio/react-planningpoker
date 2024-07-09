import { Routes as RoutesComponent, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/index.jsx";

export const Routes = () => {
    return (
        <RoutesComponent>
            <Route path="/" element={<LandingPage />} />
            <Route path="/CreateRoom" />
            <Route path="/CreateAccount" />
            <Route path="/Login" />
            <Route path="/Lobby" />
        </RoutesComponent>
    );
}
