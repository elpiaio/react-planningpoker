import React from "react";
import "./index.css"
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Cards from "../../components/Cards";
import GetStart from "../../components/GetStart";

const LandingPage = function () {
    return (
        <div className="root">
            <Header />
            <Banner />
            <Cards />
            <GetStart />
        </div>
    )
}

export default LandingPage;