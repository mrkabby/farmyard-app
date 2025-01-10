import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 // Import CartProvider
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";

import Homepage from "./pages/HomePage";
import Products from "./pages/Products";
import Cart from "./components/Cart";
import { CartProvider } from "./contexts/CartContext";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div>
          <Nav />
          <main>
            <Routes>
              <Route path="/" element={<Homepage/>} />
              <Route path="/about" element={<AboutUs/>} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/contact" element={<ContactUs/>} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
