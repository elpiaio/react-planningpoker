import React from "react";
import "./index.css";
import LoginInput from "../../components/LoginInput/index.tsx";

const Login = function () {
    return (
        <div className="root-login">
            <div className="login-square">
                <div className="login-content">
                    <div className="login-inputs">
                       <LoginInput/>
                       <LoginInput/>
                    </div>
                    
                </div>
                <div className="login-image"></div>
            </div>
        </div>
    )
}

export default Login;