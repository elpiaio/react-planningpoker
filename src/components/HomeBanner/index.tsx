import React from "react";
import './index.css';

const HomeBanner = function () {
    return (
        <div className="home-banner-root">
            <div className="home-banner">
                <div className="buttons">
                    <button className="banner-button ">Create Room</button>
                    <button className="banner-button ">Join Room</button>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner;