import React from 'react';

const Header = () => {
  return (
    <header className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://via.placeholder.com/1500')" }}>
      <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center">
        <h1 className="text-white text-5xl font-bold mb-4">Welcome to Cloth Brand</h1>
        <p className="text-gray-300 text-lg mb-8">Discover the latest fashion trends</p>
        <a href="#products" className="bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-yellow-600">Shop Now</a>
      </div>
    </header>
  );
};

export default Header;
