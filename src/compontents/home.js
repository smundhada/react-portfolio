import React from 'react'
import About from './about';
import myProfile from './assets/Intro_Background3.png';


function home() {

    return (
        <div>
             <div class="header-shadow" style={{ background: `url(${myProfile})`, }}>
                <h10>Hey There, <br></br> I'm Shubhangi Mundhada, <br></br> Full Stack Web Developer!</h10>
            </div>

            <About/>
        </div>
            
            

    )
}

export default home