import { ProductData } from "../Assets/Models";
import useCartDispatch from "../Hooks/useCartDispatch";

const ProductCard: React.FC<{ Item: ProductData }> = (Props) => {
  const dispatch = useCartDispatch();
  return (
    <div className="bg-white shadow-2xl shadow-slate-300  relative p-2 h-56  rounded-xl flex flex-col gap-4 justify-end items-center">
      <img
        className="w-36 drop-shadow-lg -top-8 object-center object-contain absolute  rounded-lg"
        src={Props.Item.productImage}
        alt=""
      />
      <div className="w-full bg-slate-50 h-full rounded-lg"></div>
      <div className="flex flex-row self-end items-center gap-2 justify-between w-full">
        <p className="">{Props.Item.productName.slice(0, 7)}</p>
        <p className="font-bold">{Props.Item.productPrice}₪</p>
      </div>
      <button onClick={(e) => {
        dispatch({
          type:'add',
          product:Props.Item
        })
      }} className="w-full bg-pink-400 hover:bg-pink-700 text-white p-2 px-4 rounded-lg">
        <i className="mr-2 fa-solid fa-cart-plus"></i>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
