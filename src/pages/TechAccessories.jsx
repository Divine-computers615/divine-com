// src/pages/TechAccessories.jsx
import './TechAccessories.css';

function TechAccessories() {
  return (
    <div className="accessory-container">
      <h1 className="accessory-title">🎮 Premium Tech Accessories</h1>
      <div className="accessory-grid">
        <div className="accessory-card">
          <img src="https://i.imgur.com/kO2p6fj.jpg" alt="Keyboard" />
          <h3>RGB Mechanical Keyboard</h3>
          <p>₹2,499</p>
        </div>
        <div className="accessory-card">
          <img src="https://i.imgur.com/qvVJeRz.jpg" alt="Mouse" />
          <h3>Gaming Mouse 7200 DPI</h3>
          <p>₹1,199</p>
        </div>
        <div className="accessory-card">
          <img src="https://i.imgur.com/NHnfwDt.jpg" alt="Headset" />
          <h3>Surround Sound Headphones</h3>
          <p>₹3,999</p>
        </div>
      </div>
    </div>
  );
}

export default TechAccessories;
