// src/pages/RepairServices.jsx
import './RepairServices.css';

function RepairServices() {
  return (
    <div className="service-container">
      <h1 className="service-title">🔧 Professional Repair Services</h1>
      <img src="https://i.imgur.com/PaKQ9cn.jpg" className="service-img" alt="Repair" />

      <ul className="service-list">
        <li>💻 Laptop screen replacement</li>
        <li>🧠 RAM & SSD upgrade</li>
        <li>🦠 Virus & malware removal</li>
        <li>🔌 Power jack repair</li>
        <li>🧰 Full system diagnostics</li>
      </ul>

      <div className="service-price">
        <h3>🪙 Starting at ₹499</h3>
        <button className="book-btn">Book a Repair</button>
      </div>
    </div>
  );
}

export default RepairServices;
