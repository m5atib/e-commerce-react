import Navbar from "../Components/Navbar";
import { useOutlet } from "react-router-dom";
import { CartProvider } from "../Reducers/ShoppingContext";



const Home = () => {
  const outlet = useOutlet();

  return (
    <CartProvider>
      <main className="bg-slate-50">
        <Navbar />
        {outlet}
      </main>
    </CartProvider>
  );
};

export default Home;
