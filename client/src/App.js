import "./styles/App.scss";
import "./styles/styles.js";
import React, { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { LoginScreen } from "./components/LoginScreen";

function App() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const login = (details) => {
    console.log(details);
  };

  const logout = () => {
    console.log("Logout");
  };

  return (
    <div className="app">
      {user.username !== "" ? (
        <Dashboard />
      ) : (
        <LoginScreen login={login} error={error} />
      )}
    </div>
  );
}

export default App;
