import React, { useContext } from 'react';
import { CartContext } from '../state/CartProvider';

export default function AddToCart({ product }) {
  const { addToCart } = useContext(CartContext);

  const handleClick = () => {
    addToCart(product);
  };

  return (
    <button onClick={handleClick}>Add to Cart</button>
  );
}
