import React, { useEffect, useState } from "react";
import "./index.css";
import LoginInput from "../../components/LoginInput/index.tsx";
import LoginButton from "../../components/LoginButton/index.tsx";
import GoogleButton from "../../components/GoogleButton/index.tsx";
import LoginSquare from "../../components/LoginSquare/index.tsx";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import { makeLogin } from "../../Api/use-cases/use-login.ts";
import { sweetalert2 } from "../../use-cases/use-sweetalert.ts"
import { Navigate, useNavigate } from "react-router-dom";

const Login = function () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState("password");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const navigate = useNavigate()

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleShowPassword() {
        if (showPassword === "password") {
            setShowPassword("text");
        } else {
            setShowPassword("password");
        }
    }

    async function handleClick() {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!re.test(String(email))) return setEmailError("Email não válido!")
        setEmailError("")

        const result = await makeLogin({ Email: email, Password: password })
        if (!result) return;
        localStorage.setItem("userId", JSON.stringify(result))

        navigate("/Home");
    }

    return (
        <div className="root-login">
            <div className="login-contents">
                <h1>Login</h1>
                <div className="login-inputs">
                    <p className="error-label">{emailError}</p>
                    <LoginInput placeholder="Email" handle={handleEmailChange} type={"email"} />
                    <div className="input-password-container">
                        <p className="error-label">{passwordError}</p>
                        <LoginInput placeholder="Password" handle={handlePasswordChange} type={showPassword} />
                        <button className="show-password-button" onClick={handleShowPassword}>
                            {showPassword === "password" ? <EyeSlash color="white" size={20} /> : <Eye color="white" size={20} />}
                        </button>
                    </div>
                    <a href="" className="recovery-password-label">Esqueceu sua senha?</a>
                </div>
                <LoginButton text="Login" handle={handleClick} />
                <a href="./CreateAccount">Não possui uma conta? cadastre-se</a>
                <GoogleButton />
            </div>
            <LoginSquare />
        </div>
    );
}

export default Login;
