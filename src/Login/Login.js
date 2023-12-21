import React from "react";
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import "./Login.css"
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className ="form">
            <div className="form-box">
                <div className="form-value">
                    <h2>Login</h2>
                    <div className="input-box">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Username"
                            className="mb-3 label"
                        >
                        <Form.Control className='input-form' type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                    </div>
                    <div className="input-box">
                        <FloatingLabel controlId="floatingPassword" label="Password" className='mb-3 label'>
                            <Form.Control className='input-form' type="password" placeholder="Password" />
                        </FloatingLabel>
                    </div>
                </div>
                <Button className='btn-login' variant="outline-primary">Login</Button>
                <div className='register'>
                    <p>Don't have account? 
                        <Link to="/register"> Register</Link> 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login