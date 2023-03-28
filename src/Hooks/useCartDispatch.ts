import { useContext } from "react";
import { CartDispatchContext } from "../Reducers/ShoppingContext";

const useCartDispatch = () => {
  return useContext(CartDispatchContext);
};

export default useCartDispatch;
