// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar'; // We'll build this next!
import GamingPC from './pages/GamingPC';
import RepairServices from './pages/RepairServices';
import TechAccessories from './pages/TechAccessories'
import SidebarMenu from './components/SidebarMenu.jsx';

function App() {
  return (
    <>
      
      <Navbar />
      <SidebarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gaming-pc" element={<GamingPC />} />
        <Route path="/repair-services" element={<RepairServices />} />
        <Route path="/tech-accessories" element={<TechAccessories />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
