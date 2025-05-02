import React from 'react';
import './NavDown.css'; // Make sure this path is correct

const NavbarDown = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <ul className="navbar-list">
          <li className="navbar-item">
            Groceries
            <ul className="navbar-submenu">
              <li >Biscuits , Drinks & Packaged Foods
                <ul className="navbar-subsubmenu1">
                  <li>Ice Cream & Frozen</li>
                  <li>Chips & Namkins</li>
                  <li>Biscuits & Cookies</li>
                  <li>Chocolate & Candies</li>
                  <li>Indian Sweet</li>
                  <li>Drinks & Juices</li>
                  <li>Breakfast Cereals</li>
                  <li>Noodles , Pasta & Vermicelli</li>
                  <li>Ready to Cook & Eat</li>
                  <li>Spread , Sauces & Ketchup</li>
                  <li>Pickles , Chutney & Flavouring </li>
                  <li>Tea & Coffee</li>
                </ul>
              </li>
              <li>Foods & Vegetables</li>
              <li>Cooking Essentials</li>
              <li>Dairy & Bakery</li>
              <li>Personal Care</li>
              <li>Beauty</li>
              <li>Mom & Baby Care</li>
              <li>Home</li>
              <li>Kitchenware</li>
              <li>Tableware</li>
              <li>School , Office & Stationery</li>
              <li>Disposable</li>
              <li>Crafts of India</li>
              <li>Gifts and Hampers</li>
              <li>Fashion Jewellery</li>
            </ul>
          </li>
          <li className="navbar-item" style={{ width: "9%" }}>Home & Lifestyle</li>
          <li className="navbar-item" style={{ width: "11%" }}>Electronics</li>
          <li className="navbar-item" style={{ width: "11%" }}>Fashion</li>
          <li className="navbar-item" style={{ width: "13%" }}>Industrial & professional supplies</li>
          <li className="navbar-item" style={{ width: "11%" }}>Precious Jewellery</li>
          <li className="navbar-item" style={{ width: "9%" }}>Wellness</li>
          <li className="navbar-item" style={{ width: "13%", display: "flex", alignItems: "center" }}>
            Local Shops <div className="new-badge">NEW</div>
          </li>
          <li className="navbar-item" style={{ width: "11%" }}>All Categories</li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarDown;
