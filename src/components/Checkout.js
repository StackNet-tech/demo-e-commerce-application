// Checkout.js
import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const Checkout = ({ total }) => {
  const stripe = useStripe();
  const elements = useElements();

  // State to handle form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  // State for error handling and success messages
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return; // Stripe.js has not yet loaded.
    }

    const cardElement = elements.getElement(CardElement);

    const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (stripeError) {
      setError(stripeError.message);
      setSuccess(false);
    } else {
      setError(null);
      setSuccess(true);
      console.log('PaymentMethod', paymentMethod);
      // Here, you can send paymentMethod.id to your server to process the payment.
      alert('Payment successful! Your order has been processed.');
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-3xl mx-auto p-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Checkout</h1>

          {/* Shipping Address */}
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Shipping Address</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first_name" className="block text-gray-700 dark:text-white mb-1">First Name</label>
                  <input type="text" id="first_name" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required />
                </div>
                <div>
                  <label htmlFor="last_name" className="block text-gray-700 dark:text-white mb-1">Last Name</label>
                  <input type="text" id="last_name" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="address" className="block text-gray-700 dark:text-white mb-1">Address</label>
                <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required />
              </div>

              <div className="mt-4">
                <label htmlFor="city" className="block text-gray-700 dark:text-white mb-1">City</label>
                <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label htmlFor="state" className="block text-gray-700 dark:text-white mb-1">State</label>
                  <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required />
                </div>
                <div>
                  <label htmlFor="zip" className="block text-gray-700 dark:text-white mb-1">ZIP Code</label>
                  <input type="text" id="zip" name="zip" value={formData.zip} onChange={handleChange} className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" required />
                </div>
              </div>
            </div>

            {/* Card Information */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Payment Information</h2>
              <CardElement className="border rounded-lg p-3" />
            </div>

            {/* Error and Success Messages */}
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">Payment successful! Your order has been processed.</p>}

            <button type="submit" className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
              Pay ${total}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
