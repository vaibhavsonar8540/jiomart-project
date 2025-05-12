import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const EleSidebar = () => {
  const [searchparams, setsearchparams] = useSearchParams();
  const [cateData, setcateData] = useState(searchparams.getAll("category") || []);

  const handlechange = (e) => {
    const { value } = e.target;
    let newarray = [...cateData];

    if (cateData.includes(value)) {
      newarray = cateData.filter((el) => el !== value);
    } else {
      newarray.push(value);
    }
    setcateData(newarray);
  };

  useEffect(() => {
    setsearchparams({ category: cateData });
  }, [cateData]);

  const categories = [
    "mobile", "computer", "large appliances", "audio",
    "home appliances", "kitchen appliances", "Smartwatch",
    "groom", "camera"
  ];

  return (
    <div style={{ border: "1px solid black", padding: "20px", borderRadius: "15px", background: "#f9f9f9" }}>
      <h3>Filter Products Here..</h3>
      {categories.map((cat) => (
        <div key={cat} style={{ marginTop: "5px" }}>
          <input
            type="checkbox"
            value={cat}
            onChange={handlechange}
            checked={cateData.includes(cat)}
          />{" "}
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </div>
      ))}
    </div>
  );
};

export default EleSidebar;
