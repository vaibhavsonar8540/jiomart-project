import React, { useEffect, useState } from 'react';
import './AllPage.css';
import { useParams } from 'react-router-dom';
import NavbarUp from '../Components/NavbarUp';


const Description = () => {
  const { category, id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);

      try {
        // Fetch from the specified category
        const response = await fetch(`http://localhost:3000/${category}/${id}`);
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
          setLoading(false);
        } else {
          setError('Product not found');
          setLoading(false);
        }
      } catch (err) {
        console.error("Failed to fetch product detail", err);
        setError('Failed to fetch product details');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [category, id]);

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4">{error}</div>;
  if (!product) return <div className="p-4">No product found</div>;

  return (
    <div>
    <NavbarUp/>
    <div className="product-page">
      <div className="product-container">
        {/* Left Section - Image */}
        <div className="product-image-section">
          <img
            src={product.image}
            alt={product.title || product.name}
            className="product-image"
          />
        </div>

        {/* Right Section - Details */}
        <div className="product-details-section">
          <h1 className="product-title">{product.title || product.name}</h1>
          {product.brand && <p className="product-brand">{product.brand}</p>}
          <p className="product-price">
            ₹{product.price} <span className="original-price">₹{product.originalPrice || product.original_price}</span>
            <span className="discount"> ({product.discount})</span>
          </p>
          
          <button className="add-to-cart-btn">Add to Cart</button>
          <button className="buy-now-btn">Buy Now</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Description;