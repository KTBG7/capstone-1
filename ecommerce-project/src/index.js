import React from "react";
import ReactDOM from "react-dom";
import Store from "./components/store/index";
import CartProvider from "./components/cart/context.js";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <Store />
    </CartProvider>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);
