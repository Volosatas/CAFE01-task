import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../styles/LoginScreen.scss";
import { useContext } from "react";
import { UserContext } from "../UserContext";
import logo from "../images/logo.png";

export function LoginScreen() {
  const { login, error } = useContext(UserContext);
  const [details, setDetails] = useState({ username: "", password: "" });

  const handleLoginFormInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setDetails({ ...details, [inputName]: inputValue });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    login(details);
  };

  return (
    <div className="loginScreen">
      <div className="loginScreen__loginBox">
        {error !== "" ? (
          <p className="loginScreen__loginBox--error">{error}</p>
        ) : (
          <p className="loginScreen__loginBox--title">
            Welcome! Please log in.
          </p>
        )}
        <Form
          onSubmit={(e) => handleLoginSubmit(e)}
          className="loginScreen__loginBox--form"
        >
          <Form.Label className="loginScreen__loginBox--form-label">
            Username:
          </Form.Label>
          <Form.Control
            name="username"
            className="loginScreen__loginBox--form-input"
            type="text"
            placeholder="Username"
            value={details.username}
            onChange={(e) => handleLoginFormInputChange(e)}
          />
          <Form.Label className="loginScreen__loginBox--form-label">
            Password:
          </Form.Label>
          <Form.Control
            name="password"
            className="loginScreen__loginBox--form-input"
            type="password"
            placeholder="Password"
            value={details.password}
            onChange={(e) => handleLoginFormInputChange(e)}
          />
          <Button
            className="loginScreen__loginBox--form-button"
            type="submit"
            variant="primary"
          >
            Login
          </Button>
        </Form>
      </div>
      <div className="loginScreen__hero">
        <img src={logo} alt="logo" className="loginScreen__hero--logo" />
      </div>
    </div>
  );
}
