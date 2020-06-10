import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "./context";
import "./styles.css";

export default function Cart({ stripeToken }) {
  function formatPrice(cost) {
    return `$${(cost * 0.01).toFixed(2)}`;
  }
  function totalPrice() {
    return ctx.lineItems.reduce(
      (acc, item) => acc + item.quantity * item.cost,
      0.0
    );
  }
  const [stripe, setStripe] = useState(null);
  const ctx = useContext(CartContext);
  useEffect(() => {
    if (window.Stripe) {
      setStripe(window.Stripe(stripeToken));
    }
  }, [stripeToken]);
  function checkout() {
    stripe.redirectToCheckout({
      mode: "payment",
      lineItems: ctx.lineItems.map((item) => ({
        price: item.price,
        quantity: item.quantity,
      })),
      successUrl: "http://localhost:3000/",
      cancelUrl: "http://localhost:3000/view-cart",
    });
  }

  return (
    <div className="wrapper">
      <table>
        <thead>
          <tr>
            <th>
              <span>Name</span>
            </th>
            <th>
              <span>Image</span>
            </th>
            <th>
              <span>Quantity</span>
            </th>
            <th>
              <span>Price</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {ctx.lineItems.map((item) => (
            <tr className="items">
              <td>{item.title}</td>
              <td>{item.img}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{formatPrice(item.cost)}</td>
            </tr>
          ))}
          <tr>
            <td style={{ textAlign: "right" }} cartcolspan={3}>
              Total:{formatPrice(totalPrice(ctx.lineItems))}
            </td>
          </tr>
          <tr className="checkout">
            <td cartcolspan={4}>
              <button onClick={checkout}>
                <span>Checkout</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
