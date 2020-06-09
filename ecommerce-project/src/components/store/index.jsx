import React, { useContext } from "react";
import products from "../../data/products.js";
import { CartContext } from "../cart/context";

export default function Store() {
  const cartCtx = useContext(CartContext);
  return (
    <div>
      {products.map((product) => (
        <div>
          <div>{product.img}</div>
          <div>{product.title}</div>
          <div>
            <button onClick={() => cartCtx.addToCart(product)}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
