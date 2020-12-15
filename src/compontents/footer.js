import React from 'react'
import { Link, useLocation } from "react-router-dom";
import Footer_Background from './assets/Footer_Background.png';
import fb_icon from './assets/fb_icon.png';
import insta_icon from './assets/insta_icon.png';
import link_icon from './assets/link_icon.png';
import git_icon from './assets/git_icon.png';
import {Grid, Row, Col} from "react-bootstrap"
function Footer( props ) {
    const location = useLocation();
    let urlFB = "https://www.facebook.com/shubhim1"
    let urlInsta = "https://www.instagram.com/shubhimundhada/"
    let urlLink = "https://www.linkedin.com/in/shubhangi-mundhada-22a1b912a/"
    let urlGit = "https://github.com/smundhada/"
    return (
        <div>
            <footer class="footer-shadow" style = {{ backgroundImage: `url(${Footer_Background})`,}}>
                <Row float="center">
                    <Col sx={3} md ={3} > 
                    <a href={urlFB}  target="_blank"><img class = "link_pic" src={fb_icon}/></a>
                    </Col>
                    <Col sx={3} md ={3} > 
                    <a href={urlInsta}  target="_blank"><img class = "link_pic" src={insta_icon}/></a>
                    </Col>
                    <Col sx={3} md ={3} > 
                    <a href={urlLink}  target="_blank"><img class = "link_pic" src={link_icon}/></a>
                    </Col>
                    <Col sx={3} md ={3} >
                    <a href={urlGit}  target="_blank"><img class = "link_pic" src={git_icon}/></a>
                    </Col>
                </Row>
            </footer>
        </div>
    )
}

export default Footer