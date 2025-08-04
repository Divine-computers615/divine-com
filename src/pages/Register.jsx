// src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 🔥 for navigation
import './Register.css';

function Register() {
  const navigate = useNavigate(); // 🔥 hook from React Router

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Username:", username, "Email:", email, "Password:", password);
    // Later: send to backend
  };

  const goToLogin = (e) => {
    e.preventDefault();
    navigate('/login'); // 🔀 navigate to login page
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>
        <h2>📝 Create Your Account</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Create password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>

        <p className="extra-text">
          Already have an account?{' '}
          <a href="#" onClick={goToLogin}>
            Login
          </a>
        </p>
      </form>
    </div>
  );
}

export default Register;

