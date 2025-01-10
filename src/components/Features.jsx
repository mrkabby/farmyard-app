import React from "react";

const Features = () => {
  const features = [
    { img: "pay on delivery.jpg", text: "Pay on delivery" },
    { img: "promotion.jpg", text: "Promotion" },
    { img: "save money.png", text: "Save Money" },
    { img: "happy sale.jpg", text: "Happy Sale" },
    { img: "order online.png", text: "Order Online" },
    { img: "24-hour-Customer-Support.jpg", text: "24/7 Support" },
  ];

  return (
    <section id="feature" className="py-16 px-4 bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            className="fe-box flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
            key={index}
          >
            <img
              src={feature.img}
              alt={feature.text}
              className="h-24 w-24 mb-4 object-contain"
            />
            <h6 className="text-lg font-semibold text-gray-700">{feature.text}</h6>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
