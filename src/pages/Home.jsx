import React, { useState } from 'react';
import SidebarMenu from '../components/SidebarMenu.jsx';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Home(){
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };
  const handleExploreClick = (e) => {
    e.preventDefault(); // to prevent anchor default behavior
    navigate('/products');
  };

  return (
    <>
      <SidebarMenu />
      <div className="container">
            
          <div className="home-container">
          {/* Search Bar */}
          <form className="search-bar" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="🔍 Search gaming PCs, accessories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>

        
          <header className="hero-section">
            <h1 className="title">DIVINE COMPUTER</h1>
            <p className="subtitle">Unleash the Power of Technology ⚡</p>
            <a href="/products" className="cta-button" onClick={handleExploreClick}>
              Explore Products
            </a>
          </header>

          <section className="features" id="explore">
            <div className="feature-card" onClick={() => navigate('/gaming-pc')} style={{ cursor: 'pointer' }}>
              <h2>🖥️ Gaming PCs</h2>
              <p>Custom builds with RGB, high FPS, and zero lag.</p>
            </div>
            
            <div className="feature-card" onClick={() => navigate('/repair-services')}>
              <h2>🛠️ Repair Services</h2>
              <p>Instant fixes for desktops, laptops, and hardware.</p>
            </div>
            <div className="feature-card" onClick={() => navigate('/tech-accessories')}>
              <h2>🧠 Tech Accessories</h2>
              <p>Keyboards, mice, headphones – all gamer grade.</p>
            </div>
          </section>
        </div>
       </div>
      </>  
  );
}

export default Home;
