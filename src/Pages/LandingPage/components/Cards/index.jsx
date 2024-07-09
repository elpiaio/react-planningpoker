import React from "react";
import './index.css';

import { Crosshair, UsersThree, Eyes } from "@phosphor-icons/react";


const Cards = function () {
    return (
        <div className="cards-container">
            <div className="card hover-modify"><Crosshair size={42}/></div>
            <div className="card hover-modify-2"><UsersThree size={42} /></div>
            <div className="card hover-modify-3"><Eyes size={42} /></div>
        </div>
    )
}

export default Cards;