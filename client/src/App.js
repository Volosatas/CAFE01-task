import "./styles/styles.js";
import React from "react";
import { Dashboard } from "./components/Dashboard";
import { LoginScreen } from "./components/LoginScreen";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoggedInUser = React.createContext();

function App() {
  const { user } = useContext(UserContext);

  return (
    <div className="app">
      {user.username !== "" ? (
        <Dashboard logout={user.logout} />
      ) : (
        <LoginScreen login={user.login} error={user.error} />
      )}
    </div>
  );
}

export default App;
