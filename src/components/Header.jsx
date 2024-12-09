import React from "react";
import { useCart } from '../state/CartProvider';

const Header = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header>
      <h1>Fullstack Prints</h1>
      <div>Cart: {totalItems} items</div>
    </header>
  );
};

export default Header;
