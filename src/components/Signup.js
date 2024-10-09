import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import axios from 'axios';

const Signup = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState({
    hasSymbol: false,
    hasCapital: false,
    hasLowercase: false,
    hasNumber: false,
  });
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryData, setCountryData] = useState([]);

  // Fetch country data from restcountries API
  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countryInfo = response.data.map((country) => ({
          name: country.name.common,
          code: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : ''),
        }));
        setCountryData(countryInfo);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };

    fetchCountryData();
  }, []);

  const validatePassword = (value) => {
    setPassword(value);
    setIsPasswordValid({
      hasSymbol: /[!@#$%^&*(),.?":{}|<>]/.test(value),
      hasCapital: /[A-Z]/.test(value),
      hasLowercase: /[a-z]/.test(value),
      hasNumber: /[0-9]/.test(value),
    });
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
    setPasswordsMatch(password === value);
  };

  return (
    <div className="py-16">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{
            backgroundImage: "url('https://contents.mediadecathlon.com/p2623660/k$5304a4a954c5e8d4e2d5c713261dbb53/kids-unisex-cotton-t-shirt-mint-green.jpg?format=auto&quality=70&f=768x0')",
          }}
        />
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">Create an Account</h2>
          <p className="text-xl text-gray-600 text-center">Join us today!</p>
          
          {/* Full Name */}
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
            <input
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="text"
              placeholder="John Doe"
            />
          </div>
          
          {/* Email Address */}
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
            <input
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="email"
              placeholder="you@example.com"
            />
          </div>

          {/* Country and Mobile Number */}
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Mobile Number</label>
            <PhoneInput
              country={'us'}  // You can set a default country here
              value={phoneNumber}
              onChange={setPhoneNumber}
              dropdownClass="country-dropdown"
              // Utilize the countryData here
              preferredCountries={countryData.map(country => country.code)}
              enableSearch
              containerStyle={{
                width: '100%',
              }}
              inputStyle={{
                width: '100%',
                backgroundColor: '#f1f1f1',
                border: '1px solid #ccc',
                borderRadius: '5px',
                padding: '10px',
              }}
            />
          </div>

          {/* Address */}
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Address</label>
            <input
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="text"
              placeholder="Street number, City, Postal code"
            />
          </div>

          {/* Password */}
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => validatePassword(e.target.value)}
            />
            <div className="mt-2 text-sm text-gray-600">
              <p className={isPasswordValid.hasSymbol ? 'text-green-600' : 'text-red-600'}>
                {isPasswordValid.hasSymbol ? '✔' : '✘'} At least one symbol
              </p>
              <p className={isPasswordValid.hasCapital ? 'text-green-600' : 'text-red-600'}>
                {isPasswordValid.hasCapital ? '✔' : '✘'} At least one uppercase letter
              </p>
              <p className={isPasswordValid.hasLowercase ? 'text-green-600' : 'text-red-600'}>
                {isPasswordValid.hasLowercase ? '✔' : '✘'} At least one lowercase letter
              </p>
              <p className={isPasswordValid.hasNumber ? 'text-green-600' : 'text-red-600'}>
                {isPasswordValid.hasNumber ? '✔' : '✘'} At least one number
              </p>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
            <input
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="password"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => handleConfirmPasswordChange(e.target.value)}
            />
            {!passwordsMatch && (
              <p className="text-red-600 text-sm mt-1">Passwords do not match</p>
            )}
          </div>

          {/* Sign Up Button */}
          <div className="mt-8">
            <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
              Sign Up
            </button>
          </div>

          {/* Link to Login */}
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <a href="Login" className="text-xs text-gray-500 uppercase">or login</a>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
