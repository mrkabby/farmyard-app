import { Link, Links } from "react-router-dom";

const HeroSection = () => {
    return (
      <section
        className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('hero-background.jpg')",
        }}
      >
        {/* Full-screen Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
        {/* Content */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to FarmYard</h1>
          <p className="text-lg mb-6">
            Get fresh, locally sourced produce straight from the farm to your
            doorstep.
          </p>
          <Link
            to="/products"
            className="inline-block bg-green-500 text-white text-lg font-semibold py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-green-600"
          >
            Order Now
          </Link>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  