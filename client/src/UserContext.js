import { createContext, useState } from "react";

export const UserContext = createContext({ username: "", userId: "" });

export function UserProvider({ children }) {
  const [user, setUser] = useState({ username: "", userId: "" });
  const [error, setError] = useState("");

  const login = async (details) => {
    const response = await fetch("http://localhost:3005/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    });
    const data = await response.json();

    if (details.username === data.username) {
      setUser({ username: data.username, userId: data.userId });
      return;
    } else if (details.username === "") {
      setError("Please enter your username");
    } else if (details.password === "") {
      setError("Enter your password");
    } else {
      setError("Wrong username or password");
    }
  };

  const logout = () => {
    setUser({ username: "", userId: "" });
  };

  return (
    <UserContext.Provider value={{ user, login, logout, error }}>
      {children}
    </UserContext.Provider>
  );
}
