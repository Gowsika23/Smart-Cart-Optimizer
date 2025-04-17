import React, { useState } from "react";
import Footer from "../components/Footer";
import PriceCard from "../components/PriceCard";
import "../styles/Home.css";

function Home() {
  const [url, setUrl] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    console.log("Button Clicked"); // ✅ Check if this logs
    const dummyResults = [
      { site: "Amazon", price: 999, link: "https://amazon.in/product" },
      { site: "Flipkart", price: 949, link: "https://flipkart.com/product" },
      { site: "Ajio", price: 970, link: "https://ajio.com/product" },
      { site: "Snapdeal", price: 930, link: "https://snapdeal.com/product" },
      { site: "Myntra", price: 960, link: "https://myntra.com/product" },
      { site: "Tata CLiQ", price: 1050, link: "https://www.tatacliq.com/product" },
      { site: "Shopclues", price: 940, link: "https://www.shopclues.com/product" },
      { site: "Reliance Digital", price: 1005, link: "https://www.reliancedigital.in/product" },
      { site: "Croma", price: 980, link: "https://www.croma.com/product" },
    ];
    setResults(dummyResults);
    console.log("Results Set:", dummyResults); // ✅ Confirm state update
  };

  return (
    <div className="home-container">
      <h1 className="home-title">🛒 Smart Shopping Cart Optimizer</h1>

      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Paste your product URL here"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button className="btn btn-success" onClick={handleSearch}>
          Compare Prices
        </button>
      </div>

      {results.length > 0 ? (
        <div className="result-row">
          {results.map((item, idx) => (
            <PriceCard key={idx} {...item} />
          ))}
        </div>
      ) : (
        <p style={{ textAlign: "center", marginTop: "20px" }}>No Results Yet</p>
      )}

      <Footer />
    </div>
  );
}

export default Home;
