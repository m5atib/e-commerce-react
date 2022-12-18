import { ProductData } from "../Assets/Models";
import useCartDispatch from "../Hooks/useCartDispatch";

const ProductCard: React.FC<{ Item: ProductData }> = (Props) => {
  const dispatch = useCartDispatch();
  return (
    <div className="bg-slate-100 p-2 rounded-xl flex flex-col gap-4 items-center">
      <img
        className="h-40 bg-white rounded-lg"
        src={Props.Item.productImage}
        alt=""
      />
      <div className="flex flex-row items-center gap-2 justify-between w-full">
        <p className="">{Props.Item.productName.slice(0, 7)}</p>
        <p className="font-bold">{Props.Item.productPrice}₪</p>
      </div>
      <button onClick={(e) => {
        dispatch({
          type:'add',
          product:Props.Item
        })
      }} className="w-full bg-pink-400 hover:bg-pink-700 text-white p-3 px-6 rounded-lg">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
