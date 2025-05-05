import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Main.css';
import { CiHeart } from "react-icons/ci";
import NavbarUp from '../Components/NavbarUp';


const Drinks = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/drinks")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch drinks:", err);
        setError("Failed to load drinks. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
    <NavbarUp/>
    <div className="product-grid">
      {data.map((el) => (
        <div className="product-card" key={el.id}>
          <span className="smart-bazaar-badge">SMART BAZAAR</span>
          <span className="favorite-icon"><CiHeart /></span>
          <img src={el.image} alt={el.title} className="product-image" />
          <div className="product-title">{el.title}</div>
          <div className="price-section">
            <span className="current-price">₹{el.price}</span>
            <span className="original-price">₹{el.original_price}</span>
            <span className="discount">{el.discount}</span>
          </div>
          <div className="quantity">{el.quantity || 'N/A'}</div>
          <button className="add-button">Add</button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Drinks;