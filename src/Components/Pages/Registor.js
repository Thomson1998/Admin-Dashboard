/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Register_Page(){
    const history = useHistory();
    return(
        <div  className="log-page">
            <div>
                <img src ="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSWsDrEqi-X6tZGQKtARvgrsfbkXQGktvQ4ji_wt-fsJ2uGpCzr" />
                <div>
                <Form>
                    <p>Create an Account!</p>
                    <Form.Group className="mb-3">
                        <Row>
                        <Col>
                            <Form.Control placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Last name" />
                        </Col>
                        </Row>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Row className="mb-3">
                    <Col>
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                    <Col>
                        <Form.Control type="password" placeholder="Repeat Password" />
                    </Col>
                    </Row>
                    <Button onClick={()=>history.push("/login")} className="log-btn" variant="primary">Register Account</Button>
                    <hr/>

                    <Button onClick={()=>history.push("/login")} className="log-btn mb-3" variant="danger">Register With Google</Button>
                    <Button onClick={()=>history.push("/login")} className="log-btn" variant="primary">Register With Facebook</Button>
                    <hr/>

                    <a onClick={()=>history.push("/forgot")} style={{fontSize:"small", cursor:"pointer"}}>Forgot Password?</a><br/>
                    <a onClick={()=>history.push("/login")} style={{fontSize:"small", cursor:"pointer"}}>Already have an account? Login!</a>
                </Form>
                </div>
            </div>
        </div>

    )
}