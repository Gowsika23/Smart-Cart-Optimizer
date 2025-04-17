import React, { useState } from "react";


export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = () => {
    if (isLogin) {
      alert(`Logged in as ${form.email}`);
    } else {
      alert(`Signed up as ${form.name}`);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-glass-card">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <p className="auth-sub">
          {isLogin ? "Welcome back to SmartCart" : "Join the SmartCart family!"}
        </p>

        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="glow-btn" onClick={handleSubmit}>
          {isLogin ? "Login" : "Sign Up"}
        </button>

        <p className="switch-text">
          {isLogin ? "New here?" : "Already have an account?"}{" "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Create an account" : "Login instead"}
          </span>
        </p>
      </div>
    </div>
  );
}
