import { useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (key) => {
    if (!items.some((item) => item.key === key)) {
      const newItem = { key: key, quantity: 1 };
      setItems([...items, newItem]);
    } else {
      console.log("item already in cart!");
    }
  };

  function updateItem(key, value) {
    console.log("updating item...", key, value);
    setItems((prevItems) =>
      prevItems
        .map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + value } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeItem(key) {
    setItems((prevItems) => prevItems.filter((item) => item.key !== key));
  }

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider value={{ items, addItem, updateItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
