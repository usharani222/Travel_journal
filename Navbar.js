import React from "react";
import logo from "../images/logo.png";

export default function Navbar(){
    return(
        <div className="nav">
            <img src={logo} alt="logo" />
            <p>My travel journal</p>
        </div>
    )
}