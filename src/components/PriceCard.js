import React from "react";

export default function PriceCard({ site, price, link }) {
  return (
    <div className="price-card">
      <div className="card-content">
        <h3>{site}</h3>
        <p>Price: ₹{price}</p>
        <a href={link} target="_blank" rel="noreferrer" className="visit-btn">
          Visit Site 🔗
        </a>
      </div>
    </div>
  );
}
