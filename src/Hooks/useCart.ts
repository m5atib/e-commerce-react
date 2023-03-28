import { useContext } from "react";
import { CartContext } from "../Reducers/ShoppingContext";

const useCart = () => {
  return useContext(CartContext);
};

export default useCart;
