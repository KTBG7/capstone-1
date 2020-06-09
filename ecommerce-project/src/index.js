import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import CartProvider from "./components/cart/context.js";

import ProductsPage from "./pages/products";

import ViewCartPage from "./pages/view-cart";

import "./styles.css";

ReactDOM.render(
  <BrowserRouter>
    <CartProvider>
      <Switch>
        <Route exact path="/" component={ProductsPage} />
        <Route path="/view-cart" component={ViewCartPage} />
      </Switch>
    </CartProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
