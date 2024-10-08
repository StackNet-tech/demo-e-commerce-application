import React, { useState, useEffect } from 'react';

const StatsSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2024-12-31T23:59:59'); // Example countdown to the end of the year
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      if (difference < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 md:p-6">
      <div className="border border-gray-200 bg-white rounded-3xl flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/4 py-8">
          <div className="md:border-r border-gray-200 px-12">
            <p className="text-gray-600 mb-2 text-center">Clothing Items Sold</p>
            <h2 className="text-4xl lg:text-5xl font-semibold text-center">150K+</h2>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 py-8">
          <div className="lg:border-r border-gray-200 px-12">
            <p className="text-gray-600 mb-2 text-center">Satisfied Customers</p>
            <h2 className="text-4xl lg:text-5xl font-semibold text-center">50K+</h2>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 py-8">
          <div className="md:border-r border-gray-200 px-12">
            <p className="text-gray-600 mb-2 text-center">Countries Served</p>
            <h2 className="text-4xl lg:text-5xl font-semibold text-center">100+</h2>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 py-8">
          <div className="px-12">
            <p className="text-gray-600 mb-2 text-center">Retail Partners</p>
            <h2 className="text-4xl lg:text-5xl font-semibold text-center">200+</h2>
          </div>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Countdown to Our Year-End Sale!</h2>
        <div className="mt-4 flex justify-center space-x-6">
          <div className="bg-gray-200 p-4 rounded-xl">
            <p className="text-4xl font-semibold">{timeLeft.days}</p>
            <p className="text-gray-600">Days</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-xl">
            <p className="text-4xl font-semibold">{timeLeft.hours}</p>
            <p className="text-gray-600">Hours</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-xl">
            <p className="text-4xl font-semibold">{timeLeft.minutes}</p>
            <p className="text-gray-600">Minutes</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-xl">
            <p className="text-4xl font-semibold">{timeLeft.seconds}</p>
            <p className="text-gray-600">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
