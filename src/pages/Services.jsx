// src/pages/Services.jsx
import React from 'react';
import './Services.css';

const services = [
  {
    id: 1,
    title: '💻 PC Repair & Upgrade',
    desc: 'Slow PC? We’ll fix it, upgrade it, and optimize performance to max FPS.',
  },
  {
    id: 2,
    title: '🧠 Custom Build Setup',
    desc: 'Get your dream RGB gaming beast — built and tested by experts.',
  },
  {
    id: 3,
    title: '🖱️ Accessory Installation',
    desc: 'We install keyboards, headsets, GPUs, RAM — all done professionally.',
  },
  {
    id: 4,
    title: '🌐 Software Installation',
    desc: 'Games, Windows, antivirus, or tools — fully licensed and secure.',
  },
  {
    id: 5,
    title: '🧼 Cleaning & Maintenance',
    desc: 'Keep your PC cool and fast — internal cleaning and thermal paste service.',
  },
];

function Services() {
  return (
    <div className="services-container">
      <h1 className="services-title">🛠️ Our Services</h1>
      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <h2>{service.title}</h2>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
