import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    const user = "user";
    const pass = "pass";
    if (username === user && password === pass) {
      setIsAuthenticated(true);
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <div className="card">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
export default Login;
