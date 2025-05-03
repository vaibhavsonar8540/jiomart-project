import React from 'react';
import './NavDown.css';

const Description = () => {
  return (
    <div className="product-page">
      <div className="product-container">
        {/* Left Section - Image */}
        <div className="product-image-section">
          <img
            src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSiuLDq0AwpJyv752FU1bgpIGnoxLr3D6UpRuxfZ2ddvZ5ZaAn2kBfpDxJsPRaCprt6ARqNrjyI4mo8OYcW6TenLomC77sm1O6YElp63W4"
            alt="Product"
            className="product-image"
          />
        </div>

        {/* Right Section - Details */}
        <div className="product-details-section">
          <h1 className="product-title">DDG Women Anarkali Printed Kurti</h1>
          <p className="product-brand">Brand: DIVYA DEEP GARMENTS</p>
          <p className="product-price">
            ₹289.00 <span className="original-price">₹1,499.00</span>
            <span className="discount"> (81% OFF)</span>
          </p>

          <p className="product-description">
            This Anarkali Kurti features premium cotton blend fabric with elegant
            floral prints. Perfect for festive and casual occasions.
          </p>

          <div className="product-options">
            <p>Color: <span className="selected-option">Blue</span></p>
            <p>Size:
              <span className="size-option">S</span>
              <span className="size-option selected">M</span>
              <span className="size-option">L</span>
              <span className="size-option">XL</span>
            </p>
          </div>

          <button className="add-to-cart-btn">Add to Cart</button>
          <button className="buy-now-btn">Buy Now</button>

          <p className="delivery-info">Delivery by 9th May | Free Shipping</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
