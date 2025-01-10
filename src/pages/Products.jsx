import React from "react";
import { useCart } from "../contexts/CartContext";

const Products = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      img: "cabbage.jpg",
      name: "Cabbage",
      description: "Fresh cabbages straight from the farm.",
      price: "$5.00",
    },
    {
      id: 2,
      img: "Carrot.jpeg",
      name: "Organic Carrots",
      description: "Sweet and crunchy organic carrots.",
      price: "$3.00",
    },
    {
      id: 3,
      img: "Red Bell Pepper.jpg",
      name: "Red Bell Pepper",
      description: "Free-range farm Bell Pepper, rich in flavor.",
      price: "$4.00",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={product.img}
                alt={product.name}
                className="h-40 w-full object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <p className="text-lg font-bold text-green-600 mt-4">{product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105 hover:bg-green-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
