import "./styles/App.scss";
import "./styles/styles.js";
import React, { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { LoginScreen } from "./components/LoginScreen";

function App() {
  const [user, setUser] = useState({ username: "" });
  const [error, setError] = useState("");

  const user1 = {
    username: "pmagnet",
    password: "123",
  };

  const login = (details) => {
    if (
      details.username === user1.username &&
      details.password === user1.password
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
        <Dashboard />
      ) : (
        <LoginScreen login={login} error={error} />
      )}
    </div>
  );
}

export default App;
