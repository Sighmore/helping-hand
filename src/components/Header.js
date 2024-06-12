import { Link } from "react-router-dom";
import React from "react";

function Header(){
    return(
        <div className="Header">
        <ul>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Blog">Blog</Link>
            <Link to="/Volunteer">Volunteer</Link>
            <Link to="/Donate">Donate</Link>
        </ul>
        </div>
    );
}

export default Header;