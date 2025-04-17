// ProductCard.js
import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ₹{product.price}</p>
      <a href={product.url} target="_blank" rel="noopener noreferrer" className="buy-now-button">
        Buy Now
      </a>
    </div>
  );
}

export default ProductCard;
