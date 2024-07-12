import { Routes as RoutesComponent, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/index.tsx";
import Register from "../Pages/UserRegister/index.tsx";
import Login from "../Pages/UserLogin/index.tsx";

export const Routes = () => {
    return (
        <RoutesComponent>
            <Route path="/" element={<LandingPage />} />
            <Route path="/CreateRoom" />
            <Route path="/Login" element={<Login />} />
            <Route path="/CreateAccount" element={<Register />} />
            <Route path="/Lobby" />
        </RoutesComponent>
    );
}
