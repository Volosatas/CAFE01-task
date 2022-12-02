import Button from "react-bootstrap/Button";

export function Header(props) {
  return (
    <header className="header">
      <div className="header__middle">
        <h1 className="header__middle--title">
          Management
          <br /> Dashboard
        </h1>
      </div>
      <Button onClick={props.logout} variant="danger">
        Log Out
      </Button>
    </header>
  );
}
