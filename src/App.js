import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PriceCard from "./components/PriceCard";

function App() {
  const [url, setUrl] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const dummyResults = [
      { site: "Amazon", price: 999, link: "https://amazon.in/product" },
      { site: "Flipkart", price: 949, link: "https://flipkart.com/product" },
      { site: "Ajio", price: 970, link: "https://ajio.com/product" },
      { site: "Snapdeal", price: 930, link: "https://snapdeal.com/product" },
      { site: "Myntra", price: 960, link: "https://myntra.com/product" },
    ];
    setResults(dummyResults);
  };

  return (
    <>
      <Header />
      <div className="container app-container">
        <div className="search-box">
          <input
            type="text"
            className="input-field"
            placeholder="Paste your product URL here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>
            🔍 Compare Prices
          </button>
        </div>

        <div className="price-results">
          {results.map((item, idx) => (
            <PriceCard key={idx} {...item} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
