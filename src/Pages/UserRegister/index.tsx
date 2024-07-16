import React, { useState } from "react";
import "./index.css";
import LoginInput from "../../components/LoginInput/index.tsx";
import LoginButton from "../../components/LoginButton/index.tsx";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import GoogleButton from "../../components/GoogleButton/index.tsx";
import LoginSquare from "../../components/LoginSquare/index.tsx";

import { makeLogin } from "../../Api/use-cases/use-login.ts";

const Register = function () {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    function handleNameChange(e) {
        setName(e.target.value)
        console.log(name)
    }

    function handleEmailChange(e) {
        setEmail(e.target.value)
        console.log(email)
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value)
        console.log(password)
    }

    function handleConfirmPasswordChange(e) {
        setConfirmPassword(e.target.value) 
        console.log(confirmPassword)
    }

    const handleClick = () => {
        //makeLogin({ Email: email, Password: password })
        console.log("clicou")
    }

    return (
        <div className="root-login">
            <div className="login-contents">
                <h1>Cadastre-se</h1>
                <div className="login-inputs">
                    <LoginInput placeholder="Name" handle={handleNameChange} type={"text"} />
                    <LoginInput placeholder="Email" handle={handleEmailChange} type={"email"} />
                    <LoginInput placeholder="Password" handle={handlePasswordChange} type={"password"} />
                    <LoginInput placeholder="Confirm Password" handle={handleConfirmPasswordChange} type={"password"} />
                </div>

                <LoginButton text="Register" handle={handleClick}/>
                <a href="./Login">Já possui uma conta? Login</a>
                <GoogleButton />
            </div>

            <LoginSquare />
        </div>
    )
}

export default Register;