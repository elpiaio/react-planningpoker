import React, { useState, useEffect } from "react";
import "./index.css";

const LoginSquare = function () {
    const [isHidden, setIsHidden] = useState(false);

    const handleResize = () => {
        const loginSquare = document.querySelector('.login-square');
        if (!loginSquare) return;

        if (window.innerWidth <= 1100) {
            if (isHidden) return;
            setIsHidden(true);
        } else {
            setIsHidden(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        window.addEventListener('load', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('load', handleResize);
        };
    }, []);

    useEffect(() => {
        const loginSquare = document.querySelector('.login-square');
        if (!loginSquare) return;

        if (isHidden) {
            loginSquare.classList.add('hidden');
        } else {
            loginSquare.classList.remove('hidden');
        }
    }, [isHidden]);

    return (
        <div className="login-square">
            <img src="/images/handsWithCard.png" alt="" />
        </div>
    );
};

export default LoginSquare;
