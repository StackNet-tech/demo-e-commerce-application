import React from 'react';

const Section = () => {
  return (
    <div>
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">About Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">We are a leading fashion brand, offering premium quality clothing for all ages. Our mission is to bring you the latest trends with a touch of elegance and comfort.</p>
        </div>
      </section>

      <section id="products" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-gray-200 p-4">
              <img src="https://via.placeholder.com/300" alt="Men" className="mb-4" />
              <h3 className="text-xl font-bold">Men</h3>
            </div>
            <div className="bg-gray-200 p-4">
              <img src="https://via.placeholder.com/300" alt="Woman" className="mb-4" />
              <h3 className="text-xl font-bold">Woman</h3>
            </div>
            <div className="bg-gray-200 p-4">
              <img src="https://via.placeholder.com/300" alt="Kids" className="mb-4" />
              <h3 className="text-xl font-bold">Kids</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
