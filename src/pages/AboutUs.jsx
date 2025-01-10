import React from "react";

const AboutUs = () => {
  return (
    <div>
      {/* Banner Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-64 flex items-center justify-center"
        style={{
          backgroundImage: "url('hero-background.jpg')",
        }}
      >
        {/* Full Opacity Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Banner Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white">About Us</h1>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-600">
            Welcome to <strong>FarmYard</strong>, your trusted partner in
            bridging the gap between farmers and consumers. Our mission is to
            serve as a reliable middleman, ensuring that fresh, locally sourced
            produce reaches your doorstep. By connecting farmers to consumers,
            we empower local communities, support sustainable farming practices,
            and make healthy food accessible to everyone.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
