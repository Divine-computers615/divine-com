// SidebarMenu.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SidebarMenu.css';

function SidebarMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
        <Link to="/" onClick={() => setIsOpen(false)}>🏠 Home</Link>
        <Link to="/products" onClick={() => setIsOpen(false)}>🛒 Products</Link>
        <Link to="/game-pc" onClick={() => setIsOpen(false)}>🕹️ Game PC</Link>
        <Link to="/repair" onClick={() => setIsOpen(false)}>🛠️ Repair Services</Link>
        <Link to="/accessories" onClick={() => setIsOpen(false)}>🎧 Accessories</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>📞 Contact</Link>
        <Link to="/register" onClick={() => setIsOpen(false)}>📝 Register</Link>
      </div>
    </>
  );
}

export default SidebarMenu;
