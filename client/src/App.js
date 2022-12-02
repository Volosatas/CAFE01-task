import "./styles/App.scss";
import "./styles/styles.js";
import React, { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { LoginScreen } from "./components/LoginScreen";

function App() {
  const [user, setUser] = useState({ username: "" });
  const [error, setError] = useState("");

  const login = async (details) => {
    const response = await fetch("http://localhost:3005/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    });
    const username = await response.json();

    if (
      details.username === username.username
    ) {
      setUser({ username: details.username });
      return;
    }
    setError("Incorrect username or password");
  };

  const logout = () => {
    setUser({ username: "" });
  };

  return (
    <div className="app">
      {user.username !== "" ? (
        <Dashboard logout={logout} />
      ) : (
        <LoginScreen login={login} error={error} />
      )}
    </div>
  );
}

export default App;
