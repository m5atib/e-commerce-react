
export const cartReducer = (cart, action) => {
  switch (action.type) {
    case "add": {
      const check = cart.find(p=> p.id === action.product.id)
      if (check){
        return [
          ...cart,
        ];
      }else{
        return [...cart,action.product]
      }
    }
    case "delete": {
      return cart.filter((p) => p.id !== action.productId);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export const initialCart = [];
