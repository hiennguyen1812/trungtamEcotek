import React from "react";
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import "./Register.css"

import { Link } from "react-router-dom";


const Register =() => {
    return (
        <div className ="form">
            <div className="form-box_register">
                <div className="form-value">
                    <h2>Register</h2>
                    <div className="input-box">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Họ và tên"
                            className="mb-3 label"
                        >
                        <Form.Control className='input-form' 
                        type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                    </div>
                    <div className="input-box">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Mã đơn vị"
                            className="mb-3 label"
                        >
                        <Form.Control className='input-form' type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                    </div>
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
                            <Form.Control className='input-form' 
                            type="password" placeholder="Password" />
                        </FloatingLabel>
                    </div>
                </div>
                <Button className='btn-register' variant="outline-primary">Register</Button>
                <div className='login'>
                    <p>Have account? 
                        <Link to="/login">  Login</Link> 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register