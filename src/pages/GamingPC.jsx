// src/pages/GamingPC.jsx
import './GamingPC.css';

function GamingPC() {
  return (
    <div className="gamingpc-container">
      <h1 className="gamingpc-title">⚔️ Ultimate RGB Gaming PC</h1>
      <img src="https://i.imgur.com/hRzBjP7.jpeg" alt="Gaming PC" className="gamingpc-image" />

      <div className="gamingpc-specs">
        <h2>🔥 Specifications</h2>
        <ul>
          <li>Intel Core i9 14th Gen / AMD Ryzen 9</li>
          <li>NVIDIA RTX 4090 GPU</li>
          <li>32GB DDR5 RAM</li>
          <li>1TB NVMe SSD</li>
          <li>Liquid Cooling System + RGB Fans</li>
          <li>750W Gold PSU + RGB Cabinet</li>
        </ul>
      </div>

      <div className="gamingpc-price">
        <h3>💸 ₹2,49,999</h3>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
  );
}

export default GamingPC;
