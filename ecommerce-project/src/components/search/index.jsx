import React, { useState, useContext } from "react";
import products from "../../data/products.js";
import { CartContext } from "../cart/context";
import "./styles.css";

export default function Store() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(products);

  // exclude column list from filter
  const excludeColumns = ["total", "img"];

  // handle change event of search input
  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
  };

  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(products);
    else {
      const filteredData = products.filter((item) => {
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  };
  const cartCtx = useContext(CartContext);
  return (
    <div className="wrapper">
      Search:{" "}
      <input
        style={{ marginLeft: 5 }}
        type="text"
        placeholder="Enter Your Flavor!"
        value={searchText}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div className="box-container">
        {data.map((d, i) => {
          return (
            <div key={i} className="box" style={{ backgroundColor: d.color }}>
              {d.img}
              <br></br>
              {d.title}
              <br></br>
              <button
                className="addButton"
                onClick={() => cartCtx.addToCart(d)}
              >
                <span>Add to Cart</span>
              </button>
            </div>
          );
        })}
        <div className="clearboth"></div>
        {data.length === 0 && <span>No records found to display!</span>}
      </div>
    </div>
  );
}
