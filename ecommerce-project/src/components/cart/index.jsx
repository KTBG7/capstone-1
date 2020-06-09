import React, { useState, useEffect } from "react";

export default function Cart({ stripeToken }) {
  function formatPrice(cost) {
    return `$${(cost * 0.01).toFixed(2)}`;
  }
  function totalPrice() {
    return lineItems.reduce(
      (acc, item) => acc + item.quantity * item.cost,
      0.0
    );
  }
  const [stripe, setStripe] = useState(null);
  useEffect(() => {
    if (window.Stripe) {
      setStripe(window.Stripe(stripeToken));
    }
  }, [stripeToken]);
  function checkout() {
    stripe.redirectToCheckout({
      mode: "payment",
      lineItems: lineItems.map((item) => ({
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
          {lineItems.map((item) => (
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
              Total:{formatPrice(totalPrice(lineItems))}
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
