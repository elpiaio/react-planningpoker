import React, { useState } from "react";
import './index.css';

import { User, SignOut } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

const HomeHeader = function ({ userName }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const removeAccount = () => {
        localStorage.removeItem("userId");
        navigate("/");
    }

    const ToLandingPage = () => {
        navigate("/");
    }

    return (
        <header className="header-root">
            <div className="header">
                <div className="img-container" onClick={ToLandingPage}>
                    <img src='/images/logo1.jfif' alt="logo" />
                </div>
                <div className="user-container">
                    <h3>{userName}</h3>
                    <User
                        className="userLogo"
                        size={22}
                        weight="bold"
                        color="white"
                        cursor="pointer"
                        onClick={toggleMenu}
                    />
                    {isMenuOpen && (
                        <div className="mini-menu" onMouseLeave={toggleMenu} onClick={removeAccount}>
                            <SignOut size={20} weight="bold" />
                            <p>Logout</p>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default HomeHeader;