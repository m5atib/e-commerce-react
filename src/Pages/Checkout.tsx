import React, { useContext } from "react";
import { ProductData } from "../Assets/Models";
import ProductCardInCart from "../Components/ProductCardInCart";
import useCart from "../Hooks/useCart";
import { Link } from "react-router-dom";
const Checkout = () => {
  const cart = useCart();
  if (cart?.length <= 0 || cart == undefined || cart == null) {
    return (
      <main className="flex flex-col gap-8 items-center justify-center p-16 ">
        <i className="text-9xl text-slate-400 fa-solid fa-box-open"></i>
        <p className="text-2xl font-bold text-slate-600">Your cart is empty</p>
        <p className="text-slate-400 mx-auto max-w-xl">
          Add some product to your cart and fill you info to contact soon!
        </p>
        <Link
          className=" bg-pink-400 hover:bg-pink-700 text-white p-3 px-6 rounded-lg"
          to="/"
        >
          Back to Home
        </Link>
      </main>
    );
  }
  const total = cart.reduce(
    (accumulator: any, currentValue: any) =>
      accumulator + currentValue.productPrice,
    0
  );
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    const formData = new FormData(event.currentTarget);
    //event.preventDefault();
    const pairs = Array.from(formData.entries());

    let inputs: any = {};
    for (let [name, value] of pairs) {
      inputs[name.toString()] = value.toString().trim();
    }
  };
  return (
    <main className="flex sm:flex-row flex-col flex-wrap mx-auto max-w-7xl p-8 gap-4">
      <div className="flex flex-col gap-4 bg-white rounded-lg flex-1 p-2 ">
        <div className="font-bold text-xl bg-white p-2 rounded-lg px-6 flex flex-row justify-between items-center gap-2">
          <p>My Cart</p>
        </div>
        <div className="flex flex-col bg-slate-50 rounded-md p-2 gap-4 divide-y-2 divide-white ">
          {cart.map((p: ProductData) => (
            <ProductCardInCart Item={p} />
          ))}
        </div>
        <div className="font-bold text-xl bg-white p-2 rounded-lg px-6 flex flex-row justify-between items-center gap-2">
          <p>Total</p>
          <p className="text-green-500 bg-green-100 p-2 rounded">{total}₪</p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg p-2 flex flex-col gap-4 flex-1"
      >
        <h1 className="font-bold text-xl bg-white p-2 rounded-lg px-6 flex flex-row justify-between items-center gap-2">
          Checkout
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="bg-slate-50 p-4  rounded"
        />
        <input
          type="email"
          placeholder="Test@example.com"
          className="bg-slate-50 p-4  rounded"
        />
        <input type="submit" value="Confirm" className="bg-pink-500 text-white p-4 font-bold text-lg rounded-lg" />
      </form>
    </main>
  );
};

export default Checkout;
