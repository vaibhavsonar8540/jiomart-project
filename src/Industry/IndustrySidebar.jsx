import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const IndustrySidebar = () => {
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
        value={"autocare"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("autocare")}
      ></input>Autocare
      <br></br>
      {" "}
      <input
        type="checkbox"
        value={"industrysupply"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("industrysupply")}
        style={{marginTop:"5px "}}
      ></input>Industry Supply
      <br></br>
    {" "}
      <input
        type="checkbox"
        value={"cleaning"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("cleaning")}
        style={{marginTop:"5px "}}
      ></input>  Home Cleaning & Organisation
      <br></br>
     {" "}
      <input
        type="checkbox"
        value={"electronicComponent"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("electronicComponent")}
        style={{marginTop:"5px "}}
      ></input> Electrical & Electronic Component
      <br></br>
      {" "}
      <input
        type="checkbox"
        value={"tools"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("tools")}
        style={{marginTop:"5px "}}
      ></input>Building Supplies & tools
      <br></br>
      {" "}
      <input
        type="checkbox"
        value={"carpentry"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("carpentry")}
        style={{marginTop:"5px "}}
      ></input>Carpentry
       <br></br>
     {" "}
      <input
        type="checkbox"
        value={"security"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("security")}
        style={{marginTop:"5px "}}
      ></input> Security , Safety & Automation
       <br></br>
       {" "}
      <input
        type="checkbox"
        value={"electrical"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("electrical")}
        style={{marginTop:"5px "}}
      ></input>Electrical
      <br></br>
      {" "}
      <input
        type="checkbox"
        value={"buildingSupplies"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("buildingSupplies")}
        style={{marginTop:"5px "}}
      ></input>Building Supplies & Measuring tools
      <br></br>
    </div>
  )
}

export default IndustrySidebar