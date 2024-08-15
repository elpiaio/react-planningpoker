import React, { useEffect, useState } from "react";
import "./index.css";
import LoginInput from "../../components/LoginInput/index.tsx";
import LoginButton from "../../components/LoginButton/index.tsx";
import GoogleButton from "../../components/GoogleButton/index.tsx";
import LoginSquare from "../../components/LoginSquare/index.tsx";

import { sweetAlertHub } from "../../use-cases/use-sweetalert.ts";
import { createUserReq } from "../../Api/use-cases/use-createAccount.ts";
import { useNavigate } from "react-router-dom";

const Register = function () {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [pristinePassword, setPristinePassword] = useState(true)
    const [pristineEmail, setPristineEmail] = useState(true)
    const [pristineName, setPristineName] = useState(true)

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [nameError, setNameError] = useState("");

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

    useEffect(() => {
        if (!pristineName) {
            if (name.length > 16) return setNameError("O nome não pode ter mais de 16 caracteres!")
            if (!name) return setNameError("O nome não pode ser nulo!")
            setNameError("")
        }
    }, [name])

    function handleNameChange(e) {
        setPristineName(false)
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
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const regexPaswword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/;

        if (name.length > 16) return setNameError("O nome não pode ter mais de 16 caracteres!")
        if (!name) return setNameError("O nome não pode ser nulo!")

        if (!regexEmail.test(String(email))) return setEmailError("Email não válido!")
        setEmailError("")
        if (!regexPaswword.test(String(password))) return;
        if (password !== confirmPassword) return sweetAlertHub.alertSweetalert("Erro!", "Senhas não conferem!", "error");

        const result = await createUserReq({ Name: name, Email: email, Password: password })

        if (result.response.data.message == 'User with this email already exists') return sweetAlertHub.alertSweetalert("Erro!", "User já existe!", "error");
        if (result.name == 'AxiosError') return sweetAlertHub.alertSweetalert("Erro!", "Um erro ocorreu!", "error");

        localStorage.setItem("userId", JSON.stringify(result))
        navigate("/Home");
    }

    return (
        <div className="root-login">
            <div className="login-contents">
                <h1>Cadastre-se</h1>
                <div className="login-inputs">
                    <p className="error-label">{nameError}</p>
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