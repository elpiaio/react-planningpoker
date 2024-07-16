import React from "react";
import "./index.css"

const LoginButton = function ({ text, handle}) {
    return (
        <div className="container-login-button">
            <button onClick={handle} className="login-button">{text}</button>
        </div>
    )
}

export default LoginButton;