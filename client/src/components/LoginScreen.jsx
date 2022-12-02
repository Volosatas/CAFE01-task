import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/LoginScreen.scss";

export function LoginScreen() {
  return (
    <div className="loginContainer">
    <div className="loginScreen">
      <p className="loginScreen__title">Welcome! Please log in</p>
      <form className="loginScreen__form">
        <Form.Control
          className="loginScreen__form--input"
          type="text"
          placeholder="Username"
        />
        <Form.Control
          className="loginScreen__form--input"
          type="password"
          placeholder="Password"
        />
        <Button variant="primary">Login</Button>
      </form>
    </div>
    </div>
  );
}
