import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart"
import Navbar from "./assets/Navbar"


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navbar />

      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/cart" element={<Cart />}></Route>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
