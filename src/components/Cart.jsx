import React from "react";
import { useCart } from "../contexts/CartContext";

const Cart = () => {
  const { cart, setCart } = useCart();

  // Remove an item from the cart by its ID
  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
      return updatedCart;
    });
  };

  // Calculate the total price of items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace("$", ""));
      return total + price;
    }, 0);
  };

  // Checkout: Clear the cart
  const handleCheckout = () => {
    alert("Checkout successful!");
    setCart([]); // Clear the cart
    localStorage.removeItem("cart"); // Clear localStorage
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Your Cart</h1>
        {cart.length > 0 ? (
          <>
            {/* List of Cart Items */}
            <ul className="space-y-4">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between"
                >
                  {/* Item Details */}
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="text-lg font-bold text-green-600">{item.price}</p>
                  </div>
                  {/* Item Image */}
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-16 w-16 object-cover rounded-lg"
                  />
                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition-colors"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            {/* Total Price and Checkout */}
            <div className="mt-8 text-right">
              <h2 className="text-2xl font-bold text-gray-800">
                Total: ${calculateTotal().toFixed(2)}
              </h2>
              <button
                onClick={handleCheckout}
                className="mt-4 bg-green-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition-transform transform hover:scale-105"
              >
                Checkout
              </button>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        )}
      </div>
    </section>
  );
};

export default Cart;
