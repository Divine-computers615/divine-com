import React, { useState } from 'react';
import './Products.css';

const productData = [
  {
    id: 1,
    name: 'RGB Gaming Beast',
    price: '₹75,000',
    image: 'https://via.placeholder.com/300x200?text=Gaming+PC',
    desc: 'Ryzen 7, RTX 4060, 32GB RAM, 1TB SSD',
  },
  {
    id: 2,
    name: 'Pro Gaming Mouse',
    price: '₹3,499',
    image: 'https://via.placeholder.com/300x200?text=Gaming+Mouse',
    desc: '16000 DPI, RGB, Ultra-lightweight',
  },
  {
    id: 3,
    name: 'Mechanical Keyboard',
    price: '₹4,999',
    image: 'https://via.placeholder.com/300x200?text=Keyboard',
    desc: 'Blue Switch, RGB Backlight, Metal Build',
  },
  {
    id: 4,
    name: 'Ultra Gaming Monitor',
    price: '₹18,000',
    image: 'https://via.placeholder.com/300x200?text=Gaming+Monitor',
    desc: '27", 144Hz, 1ms, IPS Panel',
  },
];

function Products() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = productData.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="products-container">
      <h1 className="products-title">🔥 Our Gaming Products</h1>

      {/* 🔍 Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        className="search-bar"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p className="desc">{product.desc}</p>
              <p className="price">{product.price}</p>
              <button className="buy-btn">Buy Now</button>
            </div>
          ))
        ) : (
          <p className="no-results">❌ No products found.</p>
        )}
      </div>
    </div>
  );
}

export default Products;

