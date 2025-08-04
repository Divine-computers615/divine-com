// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ for navigation
import './Login.css';

function Login() {
  const navigate = useNavigate(); // ✅ hook to navigate

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    // Future: Send to backend
  };

  const goToRegister = (e) => {
    e.preventDefault();
    navigate('/register'); // 🔀 go to register page
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>🔐 Login to Divine Computer</h2>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        <p className="extra-text">
          Don't have an account?{' '}
          <a href="#" onClick={goToRegister}>
            Register
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;

