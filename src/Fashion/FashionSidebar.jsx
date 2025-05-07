import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const FashionSidebar = () => {
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
        value={"men"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("men")}
      ></input>Mens
      <br></br>
      {" "}
      <input
        type="checkbox"
        value={"women"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("women")}
        style={{marginTop:"5px "}}
      ></input>Women
      <br></br>
    {" "}
      <input
        type="checkbox"
        value={"boys"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("boys")}
        style={{marginTop:"5px "}}
      ></input>  Boys
      <br></br>
     {" "}
      <input
        type="checkbox"
        value={"girls"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("girls")}
        style={{marginTop:"5px "}}
      ></input> Girls
      <br></br>
      {" "}
      <input
        type="checkbox"
        value={"infant"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("infant")}
        style={{marginTop:"5px "}}
      ></input>Infant
      <br></br>
      {" "}
      <input
        type="checkbox"
        value={"crafts"}
        onChange={(e) => handlechange(e)}
        checked={cateData.includes("crafts")}
        style={{marginTop:"5px "}}
      ></input>crafts of India
       <br></br>
    
    </div>
  )
}

export default FashionSidebar