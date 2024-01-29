import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom"; // Import Navigate
import AuthContext from "../Context/auth";
import axios from "../util/http";
import Loader from "../components/Loader/Loader";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const authCtx = useContext(AuthContext);

  let navigate = useNavigate();

  const onLoginSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/login", {
        username: username,
        password: password,
      });
      if (response.status === 200) {
        navigate("/home", { replace: true });
        localStorage.setItem("auth", JSON.stringify(response.data.user));
      }

      authCtx.setUser(response.data.user);
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      alert("Wrong username or password");
    }
    
  };

  if (authCtx.user) {
    <Navigate to="/home" replace={true} />
  }

  return (
    <div className="form">
      <div className="form-box">
        <div className="form-value">
          <h2>Login</h2>
          <form onSubmit={onLoginSubmit}>
            <div className="input-box">
              <FloatingLabel
                controlId="floatingInput"
                label="Username"
                className="mb-3 label"
              >
                <Form.Control
                  placeholder="name@example.com"
                  className="input-form"
                  type="text"
                  value={username}
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />
              </FloatingLabel>
            </div>
            <div className="input-box">
              <FloatingLabel
                controlId="floatingPassword"
                label="Password"
                className="mb-3 label"
              >
                <Form.Control
                  className="input-form"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </FloatingLabel>
            </div>
            <Button
              className="btn-login"
              variant="outline-primary"
              type="submit"
            >
              <NavLink to="/home" activeclassname="active-link">Login</NavLink>
            </Button>
            <div className="register">
              <p>
                Don't have an account?
                <NavLink to="/register" activeclassname="active-link"> Register</NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
