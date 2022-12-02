import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/LoginScreen.scss";
import { useContext } from "react";
import { UserContext } from "../UserContext";

export function LoginScreen(props) {
  const { user, login, error } = useContext(UserContext);
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
    <div className="loginContainer">
      <div className="loginScreen">
        {user.error !== "" ? (
          <p className="loginScreen__form--error">{error}</p>
        ) : (
          <p className="loginScreen__title">Welcome! Please log in</p>
        )}
        <form
          onSubmit={(e) => handleLoginSubmit(e)}
          className="loginScreen__form"
        >
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
          <Button type="submit" variant="primary">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
