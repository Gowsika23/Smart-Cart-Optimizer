import React from "react";

function PriceCard({ site, price, link }) {
  console.log("Rendering card for", site); // ✅ Add debug
  return (
    <div className="card p-3 m-2 price-card" style={{ width: "18rem" }}>
      <h5 className="card-title">{site}</h5>
      <p className="card-text">Price: ₹{price}</p>
      <a href={link} className="btn btn-primary" target="_blank" rel="noreferrer">
        View Product
      </a>
    </div>
  );
}

export default PriceCard;
