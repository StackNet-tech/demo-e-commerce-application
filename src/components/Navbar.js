import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">Sapumal</div>

        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="hidden lg:flex items-center space-x-2"> {/* Add space between input and button */}
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="p-2 rounded-l-md border-2 border-gray-600 focus:outline-none"
          />
          <button type="submit" className="bg-gray-600 text-white p-2 rounded-r-md hover:bg-gray-700">
            Search
          </button>
        </form>

        {/* Desktop Links */}
        <ul className="hidden lg:flex lg:space-x-8 lg:justify-end">
          {['home', 'men', 'women', 'kids', 'products', 'contactUs', 'cart', 'imageGallery', 'login'].map((item) => (
            <li key={item}>
              <Link 
                to={`/${item}`} 
                className="text-white relative hover:text-gray-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1).replace(/([A-Z])/g, ' $1')}
                <span className="block h-1 w-0 bg-white transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile View */}
      <div className={`fixed inset-0 z-40 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} bg-gray-800 p-4 lg:hidden`}>
        <button onClick={toggleMenu} className="text-white mb-4">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <ul className="flex flex-col space-y-4">
          {['home', 'men', 'women', 'kids', 'products', 'contactUs', 'cart', 'imageGallery', 'login'].map((item) => (
            <li key={item}>
              <Link 
                to={`/${item}`} 
                className="text-white relative hover:text-gray-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1).replace(/([A-Z])/g, ' $1')}
                <span className="block h-1 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
