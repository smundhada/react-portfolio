import React from 'react'
import { Link, useLocation } from "react-router-dom";
import Footer_Background from './assets/Footer_Background.png';
function Footer( props ) {
    const location = useLocation();

    return (
        <div>
               <footer class="footer-shadow" style = 
                    {{ backgroundImage: `url(${Footer_Background})`,
                    }}>
                    

                </footer>
        </div>
    )
}

export default Footer