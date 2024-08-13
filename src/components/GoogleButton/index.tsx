import React, { useEffect } from "react";
import jwt_decode from 'jwt-decode';
import { sweetAlertHub } from "../../use-cases/use-sweetalert.ts";
import { httpHandler } from '../../Api/Handler.ts';
import "./index.css";

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
            client_id: '558629785858-1koj1ntoa8j6fniberhl5fq4mokf1cu9.apps.googleusercontent.com',
            callback: handleCredentialResponse,
        });
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

    const handleGoogleLogin = () => {
        window.google.accounts.id.prompt();
    };

    return (
        <button className="button" onClick={handleGoogleLogin}>
            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" className="svg">
                <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" className="blue"></path>
                <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" className="green"></path>
                <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" className="yellow"></path>
                <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" className="red"></path>
            </svg>
            <span className="text">Continue with Google</span>
        </button>
    );
};

export default GoogleButton;

async function continueWithGoogle(body) {
    try {
        const handler = httpHandler();

        const user = await reqGetUserEmail(body.Email, handler);
        
        if (user && user.Email && user.Name && user.id) {
            localStorage.setItem('userId', JSON.stringify(user));
            window.location.href = 'Home.html';
        } else {
            const result = await createUserReq(body, handler);

            if (!result || !result.Name || !result.Email || !result.id) {
                return sweetAlertHub.errorMessage('Validation error occurred in the API');
            }

            localStorage.setItem('userId', JSON.stringify(result));
            window.location.href = 'Home.html';
        }
    } catch (error) {
        console.log(error);
        sweetAlertHub.errorMessage('Validation error occurred in the API');
    }
}

async function reqGetUserEmail(email, handler) {
    try {
        const response = await handler.get(`user/email/${email}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user by email:', error);
        return null;
    }
}

async function createUserReq(body, handler) {
    try {
        const response = await handler.post('user', body);
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        return null;
    }
}