/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";


export default function Forgot_page(){
    const history = useHistory();
    return(
       <div className="log-page">
            <div className="forgot">
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT0O79EGDznXE0gYWkJO5ttrD0oJ3fnJWyW68G-b79oTypfU4Sk"/>
                <div>
                    <p>Forgot Your Password?</p>
                    <p style={{fontSize:"medium",width:"70%",opacity:"0.6"}}>We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!</p>
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter Email Address.." />
                    </Form.Group>
                            <Button onClick={()=>history.push("/login")} className="log-btn" variant="primary">Reset Password</Button>
                            <hr className="mb-3"/>
                            <a onClick={()=>history.push("/register")} style={{fontSize:"small",cursor:"pointer"}}>Create an Account!</a><br/>
                            <a onClick={()=>history.push("/login")} style={{fontSize:"small",cursor:"pointer"}}>Already have an account? Login!</a>
                    </Form>
                </div>
            </div>
       </div>
    )
}