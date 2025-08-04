// src/pages/Contact.jsx
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">📞 Get in Touch</h1>
      <div className="contact-cards">
        <div className="contact-card">
          <h2>📍 Location</h2>
          <address>VDA BUilding, Gurudham Colony, Durgakund, JawaharNagar,Bhelupur Varanasi, Uttar Pradesh. 221005</address>
        </div>

        <div className="contact-card">
          <h2>📞 Phone</h2>
          <p>+91 6392576834</p>
          <p>+91 9889905983</p>
        </div>

        <div className="contact-card">
          <h2>📧 Email</h2>
          <p><a target="_blank" href="mailto:divinecompter615@gmail.com">divinecomputer615@gmail.com</a></p>
        </div>

        <div className="contact-card">
          <h2>🌐 Social</h2>
          <p>
            <div className="social-icons">
              <a href="https://wa.me/919670745469" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp">
                  WhatsApp
                </i>
              </a>
            </div>
            <div className="social-icons">
              <a  target="_blank"   href="https://www.instagram.com/divine_computers_?igsh=cm1leDJ1anJ1ZTlm" rel="noopener noreferrer"  aria-label="Visit our instagram">
                <i className="fab fa-instagram">
                  Instagram
                </i>
              </a>  
            </div>
            <div className="social-icons">
            <a target="_blank" href="https://youtube.com/@divinecomputersvaranasi?si=vMWN2qlKho_br0U8">YouTube</a>
            </div>         
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
