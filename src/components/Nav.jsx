import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext"; // Import the useCart hook
import "@fortawesome/fontawesome-free/css/all.css";

const Nav = () => {
  const { cart } = useCart(); // Access cart from context
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu

  return (
    <nav className="relative flex justify-between items-center p-4 bg-gray-100 shadow-md z-50">
      {/* Logo */}
      <Link to="/">
        <img src="FY logo.png" alt="FarmYard logo" className="h-12" />
      </Link>

      {/* Mobile View: Cart Icon and Hamburger */}
      <div className="md:hidden flex items-center gap-4">
        {/* Cart Icon */}
        <Link
          to="/cart"
          className="text-gray-800 text-2xl relative transition-colors duration-300 hover:text-blue-500"
        >
          <i className="fas fa-shopping-cart"></i>
          <span className="bg-red-500 text-white text-sm px-2 py-1 rounded-full absolute top-0 right-0 translate-x-3 -translate-y-2">
            {cart.length} {/* Dynamically display the cart count */}
          </span>
        </Link>

        {/* Hamburger Menu */}
        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
            
          }}
          className="text-gray-800 text-2xl focus:outline-none pr-4"
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`flex-col md:flex-row gap-4 md:flex items-center list-none absolute md:static top-16 right-0 w-full md:w-auto bg-gray-100 md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 transition-transform duration-300 ${
          isMenuOpen ? "flex" : "hidden"
        }`}
        style={{ zIndex: 50 }}
      >
        <li>
          <Link
            to="/"
            className="text-gray-800 text-base transition-colors duration-300 hover:text-blue-500"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-gray-800 text-base transition-colors duration-300 hover:text-blue-500"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="text-gray-800 text-base transition-colors duration-300 hover:text-blue-500"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-gray-800 text-base transition-colors duration-300 hover:text-blue-500"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            Contact Us
          </Link>
        </li>

        {/* Cart Icon and Count (Large Screen Only) */}
        <li className="hidden md:flex items-center">
          <Link
            to="/cart"
            className="text-gray-800 text-2xl relative transition-colors duration-300 hover:text-blue-500"
          >
            <i className="fas fa-shopping-cart"></i>
            <span className="bg-red-500 text-white text-sm px-2 py-1 rounded-full absolute top-0 right-0 translate-x-3 -translate-y-2">
              {cart.length}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
