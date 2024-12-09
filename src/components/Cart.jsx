import React from "react";
import { useCart } from '../state/CartProvider';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
