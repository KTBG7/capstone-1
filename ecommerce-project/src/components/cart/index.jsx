import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "./context";

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
      successUrl: "https://example.com/success",
      cancelUrl: "https://example.com/cancel",
    });
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {ctx.lineItems.map((item) => (
            <tr>
              <td>{item.title}</td>
              <td>
                <img src={item.img} alt={item.name} width={300} />
              </td>
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
          <tr>
            <td style={{ textAlign: "right" }} cartcolspan={4}>
              <button onClick={checkout}>Checkout now with Stripe</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
