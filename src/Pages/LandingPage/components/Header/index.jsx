import React from "react";
import './index.css';

const Header = function () {

    function navigateLogin () {
        window.location.href = "Login"
    }

    function navigateCreateAccount () {
        window.location.href = "CreateAccount"
    }

    return (
        <div className="header-root">
            <div className="header">
                <div className="img-container">
                    <img src='/images/logo1.jfif' alt="logo" />
                </div>
                <div className="buttons-container">
                    <a href="https://tunad.io/" target="_blank">Tunad.io</a>
                    <a href="https://www.linkedin.com/company/tunadplatform/mycompany/" target="_blank">Linkedin</a>
                    <a onClick={navigateLogin} className="login-button">Login</a>
                    <button onClick={navigateCreateAccount} className="register-button">Cadastre-se</button>
                </div>
            </div>
        </div>
    )
}

export default Header;