import React from 'react'
import { Link, useLocation } from "react-router-dom";
import myLogo from './assets/Shubhangi_Logo.png';

function NavBar( props ) {
    const location = useLocation();

    return (
        <div>
            
        <nav class="navbar navbar-expand-md bg-light navbar-light static-top">
        <Link to="/" className="navbar-brand"><img src={myLogo} style={{width: "50px", height: '50px'}}alt="my Logo"/> </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                        <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                        About </Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                        Contact </Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                        Portfolio </Link>
                        </li>
                    </ul>           
            </div>
         
        </nav>
    </div>
    )
}

export default NavBar