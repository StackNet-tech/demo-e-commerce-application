import React, { useState } from 'react';

const ForgotPassword = ({ onClose }) => {
  const [resetEmail, setResetEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleForgotPassword = () => {
    // Call your API to send a verification code to the user's email
    console.log('Sending verification code to:', resetEmail);
  };

  const handleVerifyCode = () => {
    // Call your API to verify the code and reset the password
    console.log('Verifying code:', verificationCode);
    console.log('Setting new password:', newPassword);
    // Close modal after resetting password
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Reset Password</h3>
        <label className="block text-gray-700 text-sm font-bold mb-2">Enter your email address</label>
        <input
          value={resetEmail}
          onChange={(e) => setResetEmail(e.target.value)}
          className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
          type="email"
        />
        <button onClick={handleForgotPassword} className="mt-4 bg-gray-700 text-white font-bold py-2 px-4 rounded hover:bg-gray-600">
          Send Verification Code
        </button>

        {/* Verification Code Section */}
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Enter Verification Code</label>
          <input
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
            type="text"
          />
          <label className="block text-gray-700 text-sm font-bold mb-2 mt-4">New Password</label>
          <input
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
            type="password"
          />
          <button onClick={handleVerifyCode} className="mt-4 bg-gray-700 text-white font-bold py-2 px-4 rounded hover:bg-gray-600">
            Reset Password
          </button>
          <button onClick={onClose} className="mt-2 text-gray-500">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
