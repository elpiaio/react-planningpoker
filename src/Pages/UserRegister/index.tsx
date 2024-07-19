import React, { useEffect, useState } from "react";
import "./index.css";
import LoginInput from "../../components/LoginInput/index.tsx";
import LoginButton from "../../components/LoginButton/index.tsx";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import GoogleButton from "../../components/GoogleButton/index.tsx";
import LoginSquare from "../../components/LoginSquare/index.tsx";

import { makeLogin } from "../../Api/use-cases/use-login.ts";
import { sweetalert2 } from "../../use-cases/use-sweetalert.ts";

const Register = function () {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [pristinePassword, setPristinePassword] = useState(true)
    const [pristineEmail, setPristineEmail] = useState(true)

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    useEffect(() => {
        if (!pristinePassword) {
            const regexUpperCase = /[A-Z]/;
            const hasUpperCase = regexUpperCase.test(password);
            if (!hasUpperCase) return setPasswordError("Precisa ter uma letra maiúscula!")

            const regexLowerCase = /[a-z]/;
            const hasLowerCase = regexLowerCase.test(password);
            if (!hasLowerCase) return setPasswordError("Precisa ter uma letra minúscula!")

            const regexNumber = /\d/;
            const hasNumber = regexNumber.test(password);
            if (!hasNumber) return setPasswordError("Precisa ter um numero!")

            if (password.length < 8) return setPasswordError("Precisa ter no minimo 8 caracteres");

            setPasswordError("")
        }
    }, [password])

    useEffect(() => {
        if (!pristineEmail) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!re.test(String(email))) return setEmailError("Email não válido!")
            setEmailError("")

            
        }
    }, [email])

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    function handlePasswordChange(e) {
        setPristinePassword(false)
        setPassword(e.target.value)
    }

    function handleConfirmPasswordChange(e) {
        setConfirmPassword(e.target.value)
    }

    const handleClick = async () => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!re.test(String(email))) return setEmailError("Email não válido!")
        setEmailError("")

        if (password !== confirmPassword) { return sweetalert2.alertSweetalert("Erro!", "Senhas não conferem!", "error") }

        // const result = await makeLogin({ Email: email, Password: password })
        //  localStorage.setItem("userId", JSON.stringify(result))
    }

    return (
        <div className="root-login">
            <div className="login-contents">
                <h1>Cadastre-se</h1>
                <div className="login-inputs">
                    <LoginInput placeholder="Name" handle={handleNameChange} type={"text"} />
                    <p className="error-label">{emailError}</p>
                    <LoginInput placeholder="Email" handle={handleEmailChange} type={"email"} />
                    <p className="error-label">{passwordError}</p>
                    <LoginInput placeholder="Password" handle={handlePasswordChange} type={"password"} />
                    <LoginInput placeholder="Confirm Password" handle={handleConfirmPasswordChange} type={"password"} />
                </div>

                <LoginButton text="Register" handle={handleClick} />
                <a href="./Login">Já possui uma conta? Login</a>
                <GoogleButton />
            </div>

            <LoginSquare />
        </div>
    )
}

export default Register;