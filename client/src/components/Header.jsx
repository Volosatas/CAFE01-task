import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { UserContext } from "../UserContext";

export function Header() {
  const { user, logout } = useContext(UserContext);

  return (
    <header className="header">
      <div className="header__middle">
        <h1 className="header__middle--title">
          Welcome to your Management
          <br /> Dashboard - {user.username}
        </h1>
      </div>
      <Button onClick={logout} variant="danger">
        Log Out
      </Button>
    </header>
  );
}
