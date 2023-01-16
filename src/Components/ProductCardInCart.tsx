import React from "react";
import { ProductData } from "../Assets/Models";
import useCartDispatch from "../Hooks/useCartDispatch";

const ProductCardInCart: React.FC<{ Item: ProductData }> = (Props) => {
  const dispatch = useCartDispatch();
  return (
    <div className="flex flex-row gap-2 pt-2 pr-2  rounded-md w-full ">
      <img
        src={Props.Item.productImage}
        className="w-24 bg-white rounded-md"
        alt=""
      />
      <div className="flex flex-col justify-between flex-1">
        <p className="font-bold text-slate-600">
          {Props.Item.productName.slice(0, 15)}
        </p>
        <p className="bg-pink-100 w-fit px-1 rounded text-pink-500">
          {Props.Item.category}
        </p>
        <p className="font-thin text-sm">
          {Props.Item.description.slice(0, 30)}
        </p>
      </div>
      <div className="flex flex-col justify-between justify-self-end ">
        <p className="text-pink-500">{Props.Item.productPrice}₪</p>
        <button
          onClick={(e) =>
            dispatch({ type: "delete", productId: Props.Item.id })
          }
          className="hover:text-red-500 "
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductCardInCart;
