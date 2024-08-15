import React, { useEffect, useRef } from "react";
import "./index.css";
import jwt_decode from 'jwt-decode';
import { sweetAlertHub } from "../../use-cases/use-sweetalert.ts";
import { reqGetUserEmail } from "../../Api/use-cases/use-getAccount.ts";
import { createUserReq } from "../../Api/use-cases/use-createAccount.ts";

declare global {
    interface Window {
        google: any;
    }
}

interface GoogleUserData {
    sub: string;
    name: string;
    email: string;
    given_name: string;
}

const GoogleButton = () => {
    useEffect(() => {
        window.google.accounts.id.initialize({
            client_id: "558629785858-1koj1ntoa8j6fniberhl5fq4mokf1cu9.apps.googleusercontent.com",
            callback: handleCredentialResponse
        });
        window.google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            {
                type: "standard",
                shape: "pill",
                theme: "outline",
                text: "continue_with",
                size: "large",
                locale: "en-US",
            }
        );
        window.google.accounts.id.prompt();
    }, []);

    const handleCredentialResponse = (response) => {
        const data: GoogleUserData = jwt_decode(response.credential);

        if (!data) return sweetAlertHub.errorMessage('An error occurred with the API!');

        const password = data.sub + 'Google';
        const body = {
            Name: data.name,
            Email: data.email,
            Password: password,
        };

        if (data.name.length < 16) {
            continueWithGoogle(body);
        } else {
            body.Name = data.given_name;
            continueWithGoogle(body);
        }
    };

    return (
        <div id="buttonDiv"></div>
    );
};

export default GoogleButton;

async function continueWithGoogle(body) {
    try {
        const user = await reqGetUserEmail(body.Email);

        if (user && user.Email && user.Name && user.id) {
            localStorage.setItem('userId', JSON.stringify(user));
            window.location.href = 'Home';
        } else {
            const result = await createUserReq(body);

            if (!result || !result.Name || !result.Email || !result.id) return sweetAlertHub.errorMessage('Validation error occurred in the API');

            localStorage.setItem('userId', JSON.stringify(result));
        }
    } catch (error) {
        console.log(error);
        sweetAlertHub.errorMessage('Validation error occurred in the API');
    }
}