import React, { useState, createContext } from "react";

export const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const [lineItems, setlineItems] = useState([]);

  function addToCart(item) {
    setlineItems((prevState) => [...prevState, item]);
  }
  function itemsWithQuantities(lineItems) {
    return lineItems.reduce((acc, item) => {
      const found = acc.find((_item) => _item.price === item.price);
      if (found) {
        found.quantity = found.quantity + 1;
      } else {
        acc.push({
          quantity: 1,
          price: item.price,
          cost: item.cost,
        });
      }
      return acc;
    }, []);
  }

  return (
    <CartContext.Provider
      value={{
        lineItems: itemsWithQuantities(lineItems),
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
