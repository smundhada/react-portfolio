import React from 'react';
import { Link } from "react-router-dom";
import shubhi_pic from "./assets/Shubhangi_Photo.png"
import clipArt from "./assets/clipart2003747.png"

function about() {

    return (
        <div>
            <div class="grid-container">
                <div class="item2">
                   <img class = "shubhangi_pic" src={shubhi_pic}></img>
                </div>
                <div class="item3">
                <div class=" description_about" id="about-shubhangi" style = 
                    {{ backgroundImage: `url(${clipArt})`,
                    backgroundSize: '15% 40%',
                    backgroundRepeat: 'no-repeat',
                    marginBottom : '20px',
                    paddingTop : '150px',}}>
                <h11>I have more than three years of
                experience in Information Technology, gained in-depth knowledge of developing products from just an
                idea to delivery and demonstrating it to clients. At JSW Steel as a software developer, I am in charge of
                developing innovative solutions across various software platforms that have flourished my technical and
                managerial skills. I am currently enrolled in a bootcamp to sharpen my web development and analytic skills.</h11>
                </div>
                </div>

            </div>
        </div>
    )
}

export default about