import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const EleSidebar = () => {
    const [searchparams, setsearchparams] = useSearchParams();

  const [cateData, setcateData] = useState(searchparams.getAll("category") || []);
  console.log(cateData);

  const handlechange = (e) => {
    const { value } = e.target;

    let newarray = [...cateData];

    if (cateData.includes(value)) {
      newarray = cateData.filter((el) => el != value);
    } else {
      newarray.push(value);
    }
    setcateData(newarray);
  };
  useEffect(() => {
    setsearchparams({ category: cateData });
  }, [cateData]);
  return (
    <div style={{border:"1px solid black",padding:"20px",borderRadius:"15px"}}>
      <h3>Filter Products Here..</h3>
      
      <input
        type="checkbox"
        value={"kitchenware"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("kitchenware")}
      ></input>Kitchen Ware
      <br></br>
      {" "}
      <input
        type="checkbox"
        value={"home furnishing"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("home furnishing")}
        style={{marginTop:"5px "}}
      ></input>Home Furnishing
      <br></br>
    {" "}
      <input
        type="checkbox"
        value={"fitness"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("fitness")}
        style={{marginTop:"5px "}}
      ></input>  Fitness and Sports
      <br></br>
     {" "}
      <input
        type="checkbox"
        value={"bags"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("bags")}
        style={{marginTop:"5px "}}
      ></input> Bags and Travel Luggage
      <br></br>
      {" "}
      <input
        type="checkbox"
        value={"laundry"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("laundry")}
        style={{marginTop:"5px "}}
      ></input>Bathroom and Laundry Assessories
      <br></br>
      {" "}
      <input
        type="checkbox"
        value={"homeandkitchen"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("homeandkitchen")}
        style={{marginTop:"5px "}}
      ></input>Home Decor
       <br></br>
     {" "}
      <input
        type="checkbox"
        value={"disposable"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("disposable")}
        style={{marginTop:"5px "}}
      ></input> Disposable
       <br></br>
       {" "}
      <input
        type="checkbox"
        value={"pooja"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("pooja")}
        style={{marginTop:"5px "}}
      ></input>Prayer and Spiritual Assessories
      <br></br>
      {" "}
      <input
        type="checkbox"
        value={"tableware"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("tableware")}
        style={{marginTop:"5px "}}
      ></input>Tableware
      <br></br>
      {" "}
      <input
        type="checkbox"
        value={"furniture"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("furniture")}
        style={{marginTop:"5px "}}
      ></input>Furniture
      <br></br>
      {" "}
      <input
        type="checkbox"
        value={"toys"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("toys")}
        style={{marginTop:"5px "}}
      ></input>Toys
      <br></br>
      {" "}
      <input
        type="checkbox"
        value={"Disposable"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("Disposable")}
        style={{marginTop:"5px "}}
      ></input>Disposable
       <br></br>
      {" "}
      <input
        type="checkbox"
        value={"Craft"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("Craft")}
        style={{marginTop:"5px "}}
      ></input> Craft of India
       <br></br>
       {" "}
      <input
        type="checkbox"
        value={"FashionJewelaary"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("FashionJewelaary")}
        style={{marginTop:"5px "}}
      ></input>Fashion Jewellery
    </div>
  )
}

export default EleSidebar