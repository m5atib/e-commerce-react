import React from "react";
import "./App.css";
import ShoppingList from "./Pages/ShoppingList";
import { Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Checkout from "./Pages/Checkout";
import Product from "./Pages/Product";
function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<ShoppingList />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
}

export default App;
