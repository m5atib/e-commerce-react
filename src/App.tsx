import "./App.css";
import { Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Checkout from "./Pages/Checkout";
import Product from "./Pages/Product";
import Home from "./Pages/Home";
function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
}

export default App;
