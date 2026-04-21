import {useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart"
import Navbar from "./assets/Navbar"
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute.jsx";


function App() {
      const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
      });  

      const token = localStorage.getItem("token");

      useEffect(() =>{
        if(token){localStorage.setItem(`cart_${token}`, JSON.stringify(cart));
      }
        
      }, [cart, token]);

  return (
    <>
      <BrowserRouter>
      <Navbar cart={cart} />

      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product" element={<Product cart={cart} setCart={setCart} />}></Route>
      <Route path="/cart" element={
        <ProtectedRoute> <Cart cart={cart} setCart={setCart} />
        </ProtectedRoute>}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
