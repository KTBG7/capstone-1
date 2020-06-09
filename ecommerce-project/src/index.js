import React from "react";
import ReactDOM from "react-dom";
import Cart from "./components/cart/index.jsx";

ReactDOM.render(
  <React.StrictMode>
    <Cart stripeToken="pk_test_51Grs4yDf4kpKOAVlQDODYdHEKNj3aPMUYBKQDWv4Ve6FNouycrdyYLO7DLU7mXSbRnHtCkCnWucrqV4qTgjQ1tfJ00ucvANJUu" />
  </React.StrictMode>,
  document.getElementById("root")
);
