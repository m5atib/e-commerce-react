import Navbar from "../Components/Navbar";
import { useOutlet } from "react-router-dom";
import { CartProvider } from "../Reducers/ShoppingContext";



const Home = () => {
  const outlet = useOutlet();

  return (
    <CartProvider>
      <main>
        <Navbar />
        {outlet}
      </main>
    </CartProvider>
  );
};

export default Home;
