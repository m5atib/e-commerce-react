import "./App.css";
import { Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Checkout from "./Pages/Checkout";
import Product from "./Pages/Product";
import Home from "./Pages/Home";
import ShoppingList from "./Pages/ShoppingList";

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />}>
        <Route index element={<ShoppingList />} />
        <Route path="/cart" element={<Checkout />} />
        <Route path="/product/:id" element={<Product />} />
      </Route>
    </Routes>
  );
}

export default App;
