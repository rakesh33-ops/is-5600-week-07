import React, { createContext, useReducer, useContext } from 'react';

// Initial state of the cart
const initialState = {
  cartItems: []
};

// Reducer function to manage cart actions
const cartReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TO_CART':
      return { 
        ...state, 
        cartItems: [...state.cartItems, { ...action.product, quantity: 1 }]
      };
    case 'REMOVE_FROM_CART':
      return { 
        ...state, 
        cartItems: state.cartItems.filter(item => item.id !== action.id) 
      };
    default:
      return state;
  }
};

// Creating CartContext to provide cart state to components
export const CartContext = createContext();

// CartProvider to wrap around the App and manage global state
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', product });
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', id });
  };

  return (
    <CartContext.Provider value={{ cartItems: state.cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook to access cart context
export const useCart = () => {
  return useContext(CartContext);
};
