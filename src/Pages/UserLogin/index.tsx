import React, { useState } from "react";
import "./index.css";
import LoginInput from "../../components/LoginInput/index.tsx";
import LoginButton from "../../components/LoginButton/index.tsx";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import GoogleButton from "../../components/GoogleButton/index.tsx";
import LoginSquare from "../../components/LoginSquare/index.tsx";

const Login = function () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState("password");

    function handleEmailChange(e) {
        setEmail(e.target.value)
        console.log(email)
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value)
        console.log(password)
    }

    function handleShowPassword() {
        if (showPassword === "password") {
            setShowPassword("text")
        } else {
            setShowPassword("password")
        }
    }

    return (
        <div className="root-login">
            <div className="login-contents">
                <h1>Login</h1>
                <div className="login-inputs">
                    <LoginInput placeholder="Email" handle={handleEmailChange} type={"email"} />
                    <div className="input-password-container">
                        <LoginInput placeholder="Password" handle={handlePasswordChange} type={showPassword} />
                        <button className="show-password-button" onClick={handleShowPassword}>{showPassword === "password" ? <EyeSlash color="white" size={20} /> : <Eye color="white" size={20} />}</button>
                    </div>
                    <a href="" className="recovery-password-label">Esqueceu sua senha?</a>
                </div>

                
                <LoginButton text="Login" />
                <a href="./CreateAccount">Não possui uma conta? cadastre-se</a>
                <GoogleButton/>
            </div>

            <LoginSquare/>
        </div>
    )
}

export default Login;