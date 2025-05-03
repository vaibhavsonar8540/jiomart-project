import React, { useState } from 'react';
import "./AllPage.css";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const originalPrice = 1499;
  const discountedPrice = 289;
  const total = discountedPrice * quantity;
  const savings = (originalPrice - discountedPrice) * quantity;

  return (
    <div className="cart-container">
      <h2 className="cart-title">My Cart</h2>

      <div className="cart-content" style={{ display: 'flex', gap: '20px' }}>
        <div className="cart-items" style={{ width: '65%' }}>
          <h3 className="basket-title">Scheduled Basket ({quantity})</h3>
          <div className="item-card">
            <img src="/path-to-image.jpg" alt="Kurti" className="item-image" />
            <div className="item-details">
              <p className="item-name">DDG Women Anarkali Printed Kurti</p>
              <div className="price-section">
                <span className="current-price">₹{discountedPrice.toFixed(2)}</span>
                <span className="original-price">₹{originalPrice.toFixed(2)}</span>
              </div>
              <p className="discount">You Save ₹{(originalPrice - discountedPrice).toFixed(2)}</p>
              <p className="seller">Sold by: <strong>DIVYA DEEP GARMENTS</strong></p>
              <p className="color">Colour: <span>Blue</span></p>
              <p className="size">Size: <span>M</span></p>
              <p className="delivery">Delivery by 9th May</p>
            </div>
            <div className="quantity-control">
              <button className="quantity-btn" onClick={decreaseQuantity}>-</button>
              <span>{quantity}</span>
              <button className="quantity-btn" onClick={increaseQuantity}>+</button>
            </div>
          </div>
        </div>

        <div className="cart-summary" style={{ width: '35%' }}>
          <div className="payment-details">
            <h3>Payment Details</h3>
            <div className="payment-row">
              <span>MRP Total</span>
              <span>₹{(originalPrice * quantity).toFixed(2)}</span>
            </div>
            <div className="payment-row">
              <span>Product Discount</span>
              <span className="discount">- ₹{savings.toFixed(2)}</span>
            </div>
            <div className="payment-row">
              <span>Delivery Fee (Scheduled)</span>
              <span className="free">FREE</span>
            </div>
            <div className="total-row">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <p className="total-saved">You Saved ₹{savings.toFixed(2)}</p>
          </div>

          <button className="place-order">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
