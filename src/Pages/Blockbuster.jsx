import axios from 'axios';
import { useEffect, useState } from 'react';
import './AllPage.css';
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import NavbarUp from '../Components/NavbarUp';
import FooterMain from '../Components/Footer';


const Blockbuster = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/Blockbuster") 
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch lifestyle items:", err);
      });
  }, []);

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

        <div style={{ width: '90%',margin:"auto" }}>
          <div className="product-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}
>
            {data.map((el) => (
              <div className="product-card" key={el.id}>
                <span className="smart-bazaar-badge">SMART BAZAAR</span>
                <span className="favorite-icon"><CiHeart /></span>
                <Link to={`/product/fashion/${el.id}`}>
                  <img src={el.image} alt={el.title} className="product-image" />
                </Link>
                <div className="product-title">{el.title}</div>
                <div className="price-section">
                  <span className="current-price">{el.price}</span>
                  {el.original_price && (
                    <span className="original-price">{el.original_price}</span>
                  )}
                  {el.discount && (
                    <span className="discount">{el.discount}</span>
                  )}
                </div>
                <div className="quantity">{el.quantity || 'N/A'}</div>
                <button className="add-button" onClick={() => handleAddToCart(el)} style={{height:"20px"}}>Add</button>
              </div>
            ))}
          </div>
        </div>
        <FooterMain/>
      </div>
  );
};

export default Blockbuster;
