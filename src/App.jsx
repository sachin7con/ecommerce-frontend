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

  const token = localStorage.getItem("token");

  const [cart, setCart] = useState(() => {

    const savedCart = token
      ? localStorage.getItem(`cart_${token}`)
      : localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {

    if (token) {
      localStorage.setItem(
        `cart_${token}`,
        JSON.stringify(cart)
      );
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify(cart)
      );
    }

  }, [cart, token]);

  return (
    <>
      <BrowserRouter>

        <Navbar cart={cart} />

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/product"
            element={
              <Product
                cart={cart}
                setCart={setCart}
              />
            }
          />

          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart
                  cart={cart}
                  setCart={setCart}
                />
              </ProtectedRoute>
            }
          />

        </Routes>

      </BrowserRouter>
    </>
  );
}
export default App
