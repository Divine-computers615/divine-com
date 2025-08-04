// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
       <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
      
      <div className="logo">Divine Computer</div>
      <ul className="nav-links">
        <li className='log'><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
