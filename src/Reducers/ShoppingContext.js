import { createContext, useContext, useReducer } from "react";
import { cartReducer, initialCart } from "./CartReducer";

export const CartContext = createContext();
export const CartDispatchContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
};
