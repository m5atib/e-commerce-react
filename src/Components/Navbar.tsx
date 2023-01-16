
import { Link } from "react-router-dom";
import useCart from "../Hooks/useCart";
const Navbar = () => {
  const cart = useCart();
  return (
    <nav className="p-4 px-8 fixed z-50 sticky absolute bg-white flex flex-row justify-between items-center">
      <Link to='/' className="hover:text-pink-500 flex flex-row gap-2 justify-center items-center">
      <i className="text-lg md:text-4xl fa-solid fa-dumpster-fire"></i>
      <h1 className="font-bold text-lg md:text-2xl">E-Commerce</h1>
      </Link>
      <div className="flex flex-row gap-2 md:gap-8 ">
        <Link className="hover:text-pink-500 flex flex-row gap-2 justify-center items-center" to="/"><i className="fa-solid fa-house"></i><h2 className="hidden md:block">Home</h2></Link>
        <Link className="hover:text-pink-500 flex flex-row gap-2 justify-center items-center" to="/cart"><i className="fa-solid fa-cart-shopping"></i><h2 className="hidden md:block">Cart </h2> <span  className="bg-green-100 text-green-500 rouned px-2">{cart?.length}</span></Link>
        <p className="hover:text-pink-500 flex flex-row gap-2 justify-center items-center disabled" ><i className="fa-solid fa-heart"></i><h2 className="hidden md:block">Favorite</h2></p>
        {/* <Link className="hover:text-pink-500 flex flex-row gap-2 justify-center items-center" to="/checkout"><i className="fa-solid fa-check-to-slot"></i><h2>Checkout</h2></Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
