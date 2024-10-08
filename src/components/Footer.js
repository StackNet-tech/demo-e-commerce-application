import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-6 mt-8">
      <div className="container mx-auto text-white">
        <div className="flex justify-between items-center">
          {/* Logo and description */}
          <div>
            <h3 className="text-2xl font-bold">Cloth Shop</h3>
            <p className="text-sm mt-2">
              Your go-to place for stylish clothing for Men, Women, and Kids.
            </p>
          </div>

          {/* Links */}
          <div className="space-x-6">
            <Link to="/home" className="text-white hover:text-gray-300">Home</Link>
            <Link to="/men" className="text-white hover:text-gray-300">Men</Link>
            <Link to="/women" className="text-white hover:text-gray-300">Women</Link>
            <Link to="/kids" className="text-white hover:text-gray-300">Kids</Link>
            <Link to="/contactUs" className="text-white hover:text-gray-300">Contact Us</Link>
            <Link to="/products" className="text-white hover:text-gray-300">All Products</Link>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-600 my-4" />

        {/* Copyright and Social Links */}
        <div className="flex justify-between items-center">
          <p className="text-sm">&copy; 2024 Cloth Shop. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="Home" className="hover:text-gray-300">Facebook</a>
            <a href="Home" className="hover:text-gray-300">Twitter</a>
            <a href="Home" className="hover:text-gray-300">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
