import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { UserContext } from "../UserContext";
import logo from "../images/logo.png";

export function Header() {
  const { user, logout } = useContext(UserContext);

  return (
    <header className="header">
      <p>Welcome, {user.username} !</p>
      <img src={logo} alt="logo" className="header__logo" />
      <div className="header__right">
        <Button onClick={logout} variant="danger">
          Log Out
        </Button>
      </div>
    </header>
  );
}
