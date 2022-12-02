import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/LoginScreen.scss";

export function LoginScreen(props) {
  const [details, setDetails] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    props.login(details);
  };

  const handleLoginFormInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setDetails({ ...details, [inputName]: inputValue });
  };

  return (
    <div className="loginContainer">
      <div className="loginScreen">
        <p className="loginScreen__title">Welcome! Please log in</p>
        <form onSubmit={handleSubmit} className="loginScreen__form">
          <Form.Control
            name="username"
            className="loginScreen__form--input"
            type="text"
            placeholder="Username"
            value={details.username}
            onChange={(e) => handleLoginFormInputChange(e)}
          />
          <Form.Control
            name="password"
            className="loginScreen__form--input"
            type="password"
            placeholder="Password"
            value={details.password}
            onChange={(e) => handleLoginFormInputChange(e)}
          />
          {/* ERROR */}
          <Button type="submit" variant="primary">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
