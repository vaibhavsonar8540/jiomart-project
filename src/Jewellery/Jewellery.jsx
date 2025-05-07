import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Jewellery.css';
import { CiHeart } from "react-icons/ci";
import { Link, useSearchParams } from 'react-router-dom';
import NavbarUp from '../Components/NavbarUp';

import JewellerySidebar from './JewellerySIdebar';


const Industry = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [order, setOrder] = useState(null);
  const [searchParam] = useSearchParams();

  const paramObj = {
    category: searchParam.getAll("category"),
    _sort: "price",
    _order: order,
    q: searchParam.get("q") || "",
  };

  useEffect(() => {
    axios.get("http://localhost:3000/preciousJewellery", { params: paramObj }) // Removed extra space
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch lifestyle items:", err);
        setError("Failed to load items. Please try again later.");
        setLoading(false);
      });
  }, [searchParam, order]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const handleAddToCart = async (item) => {
    try {
      const res = await axios.get(`http://localhost:3000/cart?id=${item.id}`);
      if (res.data.length === 0) {
        await axios.post("http://localhost:3000/cart", {
          ...item,
          quantity: 1,
        });
        alert("Item added to cart!");
      } else {
        alert("Item already in cart!");
      }
    } catch (err) {
      console.error("Failed to add item to cart:", err);
      alert("Failed to add to cart. Try again.");
    }
  };

  return (
    <div>
      <NavbarUp />
      <div style={{ marginTop: "20px", position: "relative", left: "1150px" }}>
        <select
          onChange={(e) => {
            const value = e.target.value;
            if (value === "asc") setOrder("asc"); // Low to High
            else if (value === "desc") setOrder("desc"); // High to Low
            else setOrder(null);
          }}
          style={{ padding: "5px 10px", borderRadius: '5px' }}
        >
          <option value="">Select sort option</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      <div style={{ display: 'flex', width: '80%', margin: 'auto', marginTop: '20px' }}>
        <div style={{ width: '20%', paddingRight: '20px', marginTop: "20px" }}>
          <JewellerySidebar />
        </div>

        <div style={{ width: '80%' }}>
          <div className="product-grid">
            {data.map((el) => (
              <div className="product-card" key={el.id}>
                <span className="smart-bazaar-badge">SMART BAZAAR</span>
                <span className="favorite-icon"><CiHeart /></span>
                <Link to={`/product/lifestyle/${el.id}`}>
                  <img src={el.image} alt={el.title} className="product-image" />
                </Link>
                <div className="product-title">{el.title}</div>
                <div className="price-section">
                  <span className="current-price">₹{el.price}</span>
                  {el.original_price && (
                    <span className="original-price">₹{el.original_price}</span>
                  )}
                  {el.discount && (
                    <span className="discount">{el.discount}</span>
                  )}
                </div>
                <div className="quantity">{el.quantity || 'N/A'}</div>
                <button className="add-button" onClick={() => handleAddToCart(el)}>Add</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industry;
