import React, { useEffect, useState } from 'react';
import './AllPage.css';
import { useNavigate, useParams } from 'react-router-dom';
import NavbarUp from '../Components/NavbarUp';
import axios from 'axios';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: '20px',
    gap: '40px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  imageSection: {
    flex: '1 1 300px',
    textAlign: 'center',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '400px',
    objectFit: 'contain',
    border: '1px solid #ddd',
    padding: '10px',
    backgroundColor: '#f9f9f9',
  },
  infoSection: {
    flex: '1 1 300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  price: {
    fontSize: '20px',
    color: 'green',
    marginBottom: '5px',
  },
  original: {
    textDecoration: 'line-through',
    color: '#888',
    fontSize: '16px',
    marginLeft: '10px',
  },
  discount: {
    color: '#d9534f',
    fontWeight: '500',
    marginBottom: '20px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
  },
  addToCartBtn: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '4px',
  },
  buyNowBtn: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '4px',
  },
};


const Description = () => {
  const { category, id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/${category}/${id}`);
        setProduct(response.data);
      } catch (err) {
        console.error("Failed to fetch product detail", err);
        setError("Product not found");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [category, id]);

  const handleAddToCart = async (item) => {
    try {
      const res = await axios.get(`http://localhost:3000/cart?id=${item.id}`);
      if (res.data.length === 0) {
        await axios.post("http://localhost:3000/cart", { ...item, quantity: 1 });
        alert("Item added to cart!");
      } else {
        alert("Item already in cart!");
      }
    } catch (err) {
      alert("Failed to add to cart.");
    }
  };

  const handleBuyNow = async (item) => {
    await handleAddToCart(item);
    navigate('/cart');
  };

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4">{error}</div>;
  if (!product) return <div className="p-4">No product found</div>;

return (
  <div>
    <NavbarUp />
    <div style={styles.container}>
      <div style={styles.imageSection}>
        <img src={product.image} alt={product.title} style={styles.image} />
      </div>

      <div style={styles.infoSection}>
        <h2 style={styles.title}>{product.title || product.name}</h2>
        <p style={styles.price}>
          ₹{product.price}{' '}
          <span style={styles.original}>₹{product.original_price}</span>
        </p>
        <p style={styles.discount}>
          You Save ₹{product.original_price - product.price}
        </p>

        <div style={styles.buttonGroup}>
          <button style={styles.addToCartBtn} onClick={() => handleAddToCart(product)}>
            Add to Cart
          </button>
          <button style={styles.buyNowBtn} onClick={() => handleBuyNow(product)}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </div>
);


};

export default Description;
