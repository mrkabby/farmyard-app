import React from "react";

const ContactUs = () => {
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
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
        </div>
      </section>

      {/* Contact Details and Form Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Contact Details */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Address</h3>
                <p className="text-gray-600">123 Farm Street, Greenfield, USA</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Email</h3>
                <p className="text-gray-600">info@farmyard.com</p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full mt-1 border border-gray-300 rounded-lg shadow-sm py-2 px-4 focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-1 border border-gray-300 rounded-lg shadow-sm py-2 px-4 focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full mt-1 border border-gray-300 rounded-lg shadow-sm py-2 px-4 focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 px-6 rounded-lg text-lg font-medium shadow-md hover:bg-green-600 hover:shadow-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
