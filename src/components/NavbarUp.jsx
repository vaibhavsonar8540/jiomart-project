import React from "react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { RiListCheck } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";

const NavbarUp = () => {
  return (
  
    <div style={{ backgroundColor: "#0078AD", height: "90px" }}>
      <div
        style={{
          width: "80%",
          margin: "auto",
          display: "flex",
          alignContent: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Link to={"/"}>
            <img
              src="https://www.jiomart.com/assets/ds2web/images/Jiomart-logo-ds2.0.svg?v=24"
              alt="Logo"
              height={"100px"}
              width={"100px"}
            />
          </Link>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <FaLocationDot style={{ color: "white" }} />
          </div>
          <div>
            <p style={{ color: "white" }}>Deliver to Mumbai 400020</p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              color: "white",
              alignItems: "center",
              backgroundColor: "#0C5273",
              height: "40px",
              width: "500px",
              padding: "0px 30px",
              borderRadius: "50px",
            }}
          >
            <div>
              <IoIosSearch style={{ color: "white" }} fontSize={"27px"} />
            </div>
            <input
              type="text"
              placeholder="Search Jiomart"
              style={{
                color: "white",
                width: "450px",
                backgroundColor: "#0C5273",
                border: "transparent",
                marginLeft: "10PX",
              }}
            />
            <div style={{ marginLeft: "50px" }}>
              <RiListCheck style={{ color: "white" }} fontSize={"27px"}/>
            </div>
          </div>
        </div>
        <div style={{display:"flex",alignItems:"center"}}>
          {" "}
          <Link to={"/cart"}>
            <FaShoppingCart color="white" fontSize={"23px"}/>
          </Link>{" "}
        </div>
        <div style={{display:"flex",alignItems:"center"}}>
          {" "}
          <Link  to={"/signin"}
            style={{ display: "flex", textDecoration: "none", color: "white",alignItems:"center" }}
          >
            <IoPersonCircleOutline  fontSize={"26px"}/>
            <p style={{fontWeight:"bolder",fontSize:"19px",marginLeft:"5px"}}>Sign In</p>
          </Link>{" "}
        </div>
      </div>
    </div>
 
  );
};

export default NavbarUp;
