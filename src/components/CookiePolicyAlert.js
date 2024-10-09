import React from 'react'

const CookiePolicyAlert = () => {
  return (
    <div>
        <div
            class="fixed inset-x-0 bottom-0 z-50 flex flex-col items-center justify-center bg-gray-800 text-white p-4 sm:p-6 lg:p-8">
            <p class="text-lg md:text-xl text-center mb-4">
                We use cookies and other tracking technologies to improve your browsing experience on our website, to show you
                personalized content and targeted ads, to analyze our website traffic, and to understand where our visitors are
                coming from.
            </p>
            <div class="flex flex-col md:flex-row gap-2">
                <button class="bg-teal-600 w-full min-w-[200px] hover:bg-teal-700 px-4 py-2 text-sm md:text-base font-semibold rounded-lg mb-2 md:mb-0">
                I Agree
                </button>
                <button class="bg-gray-600 w-full min-w-[200px] hover:bg-gray-700 px-4 py-2 text-sm md:text-base font-semibold rounded-lg">
                I Decline
                </button>
            </div>
            <button class="mt-2 text-sm text-gray-300 underline">Change my preferences</button>
            </div>
    </div>
  )
}

export default CookiePolicyAlert
