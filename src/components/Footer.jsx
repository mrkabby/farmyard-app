import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="social-media flex justify-center gap-6 mb-4">
        <a
          href="https://www.facebook.com/YourFacebookPage/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl transition-colors duration-300 hover:text-blue-500"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://twitter.com/YourTwitterHandle/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl transition-colors duration-300 hover:text-blue-400"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.instagram.com/YourInstagramHandle/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl transition-colors duration-300 hover:text-pink-500"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <p className="text-center text-sm">&copy; 2023 FarmYard. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
