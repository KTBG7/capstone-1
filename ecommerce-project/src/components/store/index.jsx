import React from "react";
import products from "../../data/products";

function index() {
  return (
    <div>
      {products.map((product) => (
        <div>
          <div>{product.img}</div>
          <div>{product.name}</div>
        </div>
      ))}
    </div>
  );
}

export default index;
