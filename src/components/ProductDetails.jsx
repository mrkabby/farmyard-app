import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  // Example products list (replace with API call or data fetching logic)
  const products = [
    {
      id: 1,
      img: "path-to-image/product1.jpg",
      name: "Fresh Apples",
      description: "Crisp, juicy apples straight from the farm.",
      price: "$5.00",
    },
    {
      id: 2,
      img: "path-to-image/product2.jpg",
      name: "Organic Carrots",
      description: "Sweet and crunchy organic carrots.",
      price: "$3.00",
    },
    {
      id: 3,
      img: "path-to-image/product3.jpg",
      name: "Farm Eggs",
      description: "Free-range farm eggs, rich in flavor.",
      price: "$4.00",
    },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p className="text-center text-red-500">Product not found!</p>;
  }

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-6">{product.description}</p>
          <p className="text-2xl font-semibold text-green-600 mb-8">{product.price}</p>
          <button
            className="bg-green-500 text-white py-3 px-6 rounded-lg text-lg font-medium shadow-md hover:bg-green-600 hover:shadow-lg transition duration-300"
            onClick={() => alert(`${product.name} has been added to the cart!`)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
