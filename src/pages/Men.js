import React from 'react';

const Men = () => {
  return (
    <div>

      {/* ✅ Grid Section - Starts Here 👇 */}
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {/*   ✅ Product card 1 - Starts Here 👇 */}
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="ProductView">
            <img
              src="https://th.bing.com/th/id/R.f144d63506b998b61d0478ec7e437687?rik=0n%2fcNYmumWYPqA&pid=ImgRaw&r=0"
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path
                      d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
        {/*   🛑 Product card 1 - Ends Here  */}


        {/*   ✅ Product card 1 - Starts Here 👇 */}
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="ProductView">
            <img
              src="https://i.pinimg.com/originals/c9/27/b9/c927b982db4c6bc599746d6cdf64bc3c.jpg"
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path
                      d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
        {/*   🛑 Product card 1 - Ends Here  */}

        {/*   ✅ Product card 1 - Starts Here 👇 */}
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="ProductView">
            <img
              src="https://th.bing.com/th/id/R.525f408378fa84c60830a7ae8c1456a9?rik=RiG6Mgw67qTGiw&riu=http%3a%2f%2ftruehealthdiary.com%2fwp-content%2fuploads%2f2017%2f06%2fvest.jpg&ehk=NzAg2JOcaMftY%2fR%2bSqGpm29S%2fEv9sDgU9qoHbHDfRyg%3d&risl=&pid=ImgRaw&r=0"
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path
                      d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
        {/*   🛑 Product card 1 - Ends Here  */}

        {/*   ✅ Product card 1 - Starts Here 👇 */}
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="ProductView">
            <img
              src="https://th.bing.com/th?id=OIF.%2feq1RE2VL7dP6ieeYxniKQ&rs=1&pid=ImgDetMain"
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path
                      d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
        {/*   🛑 Product card 1 - Ends Here  */}

        {/*   ✅ Product card 1 - Starts Here 👇 */}
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="ProductView">
            <img
              src="https://i5.walmartimages.com/seo/Aipewai-Mens-Fall-Clothes-Solid-Color-Top-Casual-Blouse-Base-Shirt-Long-Sleeved-T-shirt_1fe22692-3c0a-4b70-a428-bd67d533b4d4.4a8b9ee87ca7b16d95ddba06a3914323.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path
                      d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
        {/*   🛑 Product card 1 - Ends Here  */}

        {/*   ✅ Product card 1 - Starts Here 👇 */}
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="ProductView">
            <img
              src="https://th.bing.com/th/id/OIP.xcxyZMmRu5gsJWBKFwFitAHaLH?rs=1&pid=ImgDetMain"
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path
                      d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
        {/*   🛑 Product card 1 - Ends Here  */}

        {/*   ✅ Product card 1 - Starts Here 👇 */}
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="ProductView">
            <img
              src="https://th.bing.com/th/id/R.6932928e8a7f774730df52b694974054?rik=hAIWxL1phT11XQ&riu=http%3a%2f%2fstatic1.squarespace.com%2fstatic%2f5a5ccb53ccc5c5e98ccd9457%2ft%2f5d5413ec7861a100019e0f2b%2f1567108340241%2froyal-sapphire-formal-navy-suspenders-jj-suspenders-4.jpg%3fformat%3d1500w&ehk=i5PkEMJLpA4XpzENJRdTlSq3TBG0ulrXo4adHd5imzM%3d&risl=&pid=ImgRaw&r=0"
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path
                      d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
        {/*   🛑 Product card 1 - Ends Here  */}

        {/*   ✅ Product card 1 - Starts Here 👇 */}
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="ProductView">
            <img
              src="https://i5.walmartimages.com/seo/WNgert-Mens-Shirts-Mens-Color-Matching-Lapel-Button-Half-Sleeve-Shirt-T-Shirt-Short-Sleeve-Shirt-Shirts-For-Women-Color-Light-Blue-Size-S_9c33a9ff-d0b4-4561-8a5d-30a17b220d20.50002a1c854f60f39e6531cf673497e0.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
              <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path
                      d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
        {/*   🛑 Product card 1 - Ends Here  */}


        {/* Repeat for other product cards */}
      </section>
    </div>
  );
};

export default Men;
