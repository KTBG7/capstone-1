import React, { useContext } from "react";
import products from "../../data/products.js";
import { CartContext } from "../cart/context";
import "./styles.css";

export default function Store() {
  const cartCtx = useContext(CartContext);
  return (
    <div className="wrapper">
      {products.map((product) => (
        <div className="products">
          <div className="productInfo">
            {product.img}
            <br></br>
            {product.title}
            <br></br>
            <button
              className="addButton"
              onClick={() => cartCtx.addToCart(product)}
            >
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
