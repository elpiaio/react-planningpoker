import React from "react";
import './index.css';
import { Router, useNavigate } from "react-router-dom";

const Header = function () {
    const navigate = useNavigate();

    function navigateLogin() {
        navigate("/Login");
    }

    function navigateCreateAccount() {
        navigate("/CreateAccount");
    }

    return (
        <header className="header-root">
            <div className="header">
                <div className="img-container">
                    <img src='/images/logo1.jfif' alt="logo" />
                </div>
                <div className="buttons-container">
                    <a href="https://tunad.io/" target="_blank">Tunad.io</a>
                    <a href="https://www.linkedin.com/company/tunadplatform/mycompany/" target="_blank">Linkedin</a>
                    <a onClick={navigateLogin} className="landingpage-login-button">Login</a>
                    <button onClick={navigateCreateAccount} className="register-button">Cadastre-se</button>
                </div>
            </div>
        </header>
    )
}

export default Header;