import React from 'react'
import budget_list from './assets/budget_list.png';
import proj_schd from './assets/proj-schd.png';
import proj_weather from './assets/proj-weather.png';
import proj_mars from './assets/proj-mars.png';
import {Grid, Row, Col} from "react-bootstrap"


function Portfolio() {
    let urlBugdet = "https://bucketbudgetplanner.herokuapp.com/"
    let urlSchd = "https://smundhada.github.io/Day_Planner/"
    let urlWeather = "https://www.linkedin.com/in/shubhangi-mundhada-22a1b912a/"
    let urlMars = "https://josh-wilson6289.github.io/mars-vacation-homes/"
    return (
        <div style = 
        {{marginBottom : '160px',
          alignContent : 'center',
          textAlign : 'center',
          }}>
            <div class="container">
               
                <Row float="center">
                    <Col sx={3} md ={6} >
                        <a href={urlBugdet}  target="_blank"><img class = "port_pic" src={budget_list}/></a>
                        <h7>Budget Bucket</h7><br></br>
                        <a href=" https://bucketbudgetplanner.herokuapp.com/" target="_blank"><h8>Deployed Link</h8></a> 
                        <h8> -- </h8>
                        <a href="https://github.com/msyatlaus/bucket-budget" target="_blank"><h8>GitHub Link</h8></a>
                    </Col>

                    <Col sx={3} md ={6} > 
                        <a href={urlSchd}  target="_blank"><img class = "port_pic" src={proj_schd}/></a>
                        <h7>Daily Planner</h7><br></br>
                        <a href="https://smundhada.github.io/Day_Planner/" target="_blank"><h8>Deployed Link</h8></a> 
                        <h8> -- </h8>
                        <a href="https://github.com/smundhada/Day_Planner" target="_blank"><h8>GitHub Link</h8></a>
                    </Col>

                    <Col sx={3} md ={6} > 
                        <a href={urlWeather}  target="_blank"><img class = "port_pic" src={proj_weather}/></a>
                        <h7>Weather Dashboard</h7><br></br>
                        <a href="https://smundhada.github.io/Weather-Dashboard/" target="_blank"><h8>Deployed Link</h8></a> 
                        <h8> -- </h8>
                        <a href="https://github.com/smundhada/Weather-Dashboard" target="_blank"><h8>GitHub Link</h8></a>
                    </Col>
                    
                    <Col sx={3} md ={6} >
                        <a href={urlMars}  target="_blank"><img class = "port_pic" src={proj_mars}/></a>
                        <h7>Mar's Vacation Home</h7><br></br>
                        <a href="https://josh-wilson6289.github.io/mars-vacation-homes/" target="_blank"><h8>Deployed Link</h8></a> 
                        <h8> -- </h8>
                        <a href="https://github.com/josh-wilson6289/mars-vacation-homes" target="_blank"><h8>GitHub Link</h8></a>
                    </Col>
                </Row>
                
           </div>
        </div>
            
            

    )
}

export default Portfolio