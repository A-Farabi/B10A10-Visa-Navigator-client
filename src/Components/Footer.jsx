import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Visa Navigator</h3>
          <p className="text-sm">
            Your trusted companion for hassle-free visa applications, tracking, and updates. 
            We simplify your journey to new opportunities across the globe.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/all-visas" className="hover:underline">All Visas</a></li>
            <li><a href="/my-visa-applications" className="hover:underline">My Visa Applications</a></li>
            <li><a href="/login" className="hover:underline">Login / Register</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-sm mb-2">Email: support@visanavigator.com</p>
          <p className="text-sm mb-2">Phone: +123-456-7890</p>
          <p className="text-sm">Address: 123 Global Street, World City</p>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-8 pt-6 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} Visa Navigator. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
