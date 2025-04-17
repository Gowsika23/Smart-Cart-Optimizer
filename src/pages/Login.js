import React, { useState } from "react";
import "../styles/Login.css"; // Make sure this path is correct

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add login functionality here
    console.log("Logged in with:", email, password);
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login to Your Account</h2>
      <div className="input-group">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-group">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin} className="login-btn">
        Login
      </button>
      <p className="signup-link">
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
}

export default Login;
