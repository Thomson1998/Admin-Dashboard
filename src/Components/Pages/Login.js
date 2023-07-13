/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Login_Page(){
    const history = useHistory();
    return(
            <div className="log-page">
                <div>
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSHs_OjPDNmk8I-gLZbx2PU9qIxSe5RXJQytuSLoKxVUhpSfmc-"/>
                <div>
                    <p>Welcome Back!</p>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>

                    <Button onClick={()=>history.push("/")} variant="primary" type="submit" className="log-btn">Login</Button>
                    <hr className="mb-3"/>

                    <Button onClick={()=>history.push("/")} className="log-btn mb-3" variant="danger" type="submit">G Login with Google</Button>
                    <Button onClick={()=>history.push("/")} className="log-btn" variant="success" type="submit">f Login with Facebook</Button>
                    <hr className="mb-3"/>

                    <a onClick={()=>history.push("/forgot")} style={{fontSize:"small", cursor:"pointer"}}>Forgot Password?</a><br/>
                    <a onClick={()=>history.push("/register")} style={{fontSize:"small", cursor:"pointer"}}>create an account!</a>
                </Form>
                </div>
            </div>
        </div>
    )
}