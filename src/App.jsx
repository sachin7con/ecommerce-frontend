import {useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart"
import Navbar from "./assets/Navbar"



function App() {
      const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
      });  

      useEffect(() =>{
        localStorage.setItem("cart", JSON.stringify(cart));
      }, [cart]);

  return (
    <>
      <BrowserRouter>
      <Navbar cart={cart} />

      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product" element={<Product cart={cart} setCart={setCart} />}></Route>
      <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />}></Route>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
