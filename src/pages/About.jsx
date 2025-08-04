import React from 'react';
import './About.css';

function About() {
  return (
   <div className="about-container">
      <section className="about-hero">
        <h1>About Divine Computer</h1>
        <p>Your trusted tech partner in the gaming world.</p>
      </section>

      <section className="about-content">
        <div className="about-box">
          <h2>🎮 Who We Are</h2>
          <p>
            Divine Computer is a next-gen tech hub built by gamers, for gamers. From powerful rigs to elite accessories — we help you level up your digital battlefield.
          </p>
        </div>

        <div className="about-box">
          <h2>⚙️ What We Offer</h2>
          <p>
            High-performance gaming PCs, repairs, custom builds, RGB setups, and lightning-fast support — all with elite precision and gamer spirit.
          </p>
        </div>

        <div className="about-box">
          <h2>🚀 Our Mission</h2>
          <p>
            To empower every gamer and creator with unbeatable performance, futuristic designs, and relentless innovation.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;