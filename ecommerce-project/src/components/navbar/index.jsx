import React, { useContext } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { CartContext } from "../cart/context.js";

export default function NavBar() {
  const cartCtx = useContext(CartContext);
  const numItems = cartCtx.lineItemsCount;
  return (
    <div className="layout nav-bar">
      <Link className="logo" to="/">
        <img src="img/logo.png" />
      </Link>
      <button className="cart">
        <span>
          <Link className="cart2" to="/view-cart">
            Cart ({numItems})
          </Link>
        </span>
      </button>
    </div>
  );
}
