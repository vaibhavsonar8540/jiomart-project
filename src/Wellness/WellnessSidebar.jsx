import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const WellnessSidebar = () => {
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
        value={"personalcare"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("personalcare")}
      ></input>Personal Care
      <br></br>
      {" "}
      <input
        type="checkbox"
        value={"fitness"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("fitness")}
        style={{marginTop:"5px "}}
      ></input>Fitness
      <br></br>
      <input
        type="checkbox"
        value={"skincare"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("skincare")}
      ></input>Skincare
      <br></br>
      {" "}
      <input
        type="checkbox"
        value={"ayush"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("ayush")}
        style={{marginTop:"5px "}}
      ></input>Ayush
      <br></br>
      <input
        type="checkbox"
        value={"mombaby"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("mombaby")}
      ></input>Mom & Baby
      <br></br>
      {" "}
      <input
        type="checkbox"
        value={"hair"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("hair")}
        style={{marginTop:"5px "}}
      ></input>Hair
      <br></br>
      <input
        type="checkbox"
        value={"wellness"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("wellness")}
      ></input>Wellness
      <br></br>
      {" "}
      <input
        type="checkbox"
        value={"fragnance"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("fragnance")}
        style={{marginTop:"5px "}}
      ></input>Fragnance
      <br></br>
      <input
        type="checkbox"
        value={"covid"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("covid")}
        style={{marginTop:"5px "}}
      ></input>Covid Essentials
      <br></br>
      <input
        type="checkbox"
        value={"mensgroom"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("mensgroom")}
        style={{marginTop:"5px "}}
      ></input>Men's Grooming
      <br></br>
      <input
        type="checkbox"
        value={"makeup"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("makeup")}
        style={{marginTop:"5px "}}
      ></input>Make up
      <br></br>
    
    </div>
  )
}

export default WellnessSidebar