import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { RiListCheck } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import NavbarDown from "../Components/NavbarDown";


const NavbarUp = () => {

// Inside NavbarUp component
const [searchTerm, setSearchTerm] = useState("");
const navigate = useNavigate();
const [searchParams] = useSearchParams();

const handleSearch = (e) => {
  if (e.key === "Enter") {
    const params = new URLSearchParams(searchParams);
    if (searchTerm.trim()) {
      params.set("q", searchTerm);
    } else {
      params.delete("q");
    }
    navigate({ search: params.toString() });
  }
};


  return (
  
    <div>
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

          {/* search */}
        <div className="search-bar">
      <div className="search-icon">
        <IoIosSearch fontSize="27px" />
      </div>
      <input
        type="text"
        placeholder="Search Jiomart"
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleSearch}
      />

      <div className="list-icon">
        <RiListCheck fontSize="27px" />
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
    <NavbarDown/>
    
    </div>
 
  );
};

export default NavbarUp;
