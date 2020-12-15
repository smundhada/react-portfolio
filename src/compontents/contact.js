import React from 'react'
import {Grid, Row, Col} from "react-bootstrap"


function Contact() {

    return (
        <div style = 
        {{marginBottom : '160px',
          alignContent : 'center',
          textAlign : 'center',
          }}>
           <div class="row justify-content-md-center">
                <div class="contact-form">
                        <form>
                            <Row md ={5} float="center">
                                <Col sx={3} md ={12} >
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" placeholder="Email Address" id="exampleInputEmail1" aria-describedby="emailHelp"style = 
                                    {{ border: '2px solid #D4AF37',
                                    borderRadius: '2px',
                                    marginBottom: '20px',}}></input>
                                </Col>
                                <Col sx={3} md ={12} >
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" placeholder="Password" id="exampleInputPassword1" style = 
                                    {{ border: '2px solid #D4AF37',
                                    borderRadius: '2px',
                                    marginBottom: '20px',}}></input>
                                </Col>
                                <Col sx={3} md ={12} >
                                        <label for="exampleFormControlTextarea1">Message</label>
                                        <textarea class="form-control" placeholder="Message" id="exampleFormControlTextarea1" rows="3" style =
                                        {{ border: '2px solid #D4AF37',
                                        borderRadius: '2px',
                                        marginBottom: '40px',}}>
                                        </textarea>
                                </Col>
                                <Col sx={3} md ={12} >
                                        <button type="submit" class="buttonShub">Submit</button>
                                </Col>
                            </Row>
                        </form>
                </div>
            </div>
        </div>
            
            

    )
}

export default Contact