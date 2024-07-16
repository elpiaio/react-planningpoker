import React from "react";
import "./index.css"

const LoginButton = function ({ text }) {
    return (
        <div className="container-login-button">
            <button className="login-button">{text}</button>
        </div>
    )
}

export default LoginButton;