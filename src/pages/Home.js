import React from 'react'

const Home = () => {
  return (
            <>
            <section className="px-3 py-5 bg-neutral-100 lg:py-10">
            <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
            {/* Text Section */}
            <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
                <p className="text-4xl font-bold md:text-7xl text-orange-600">25% OFF</p>
                <p className="text-4xl font-bold md:text-7xl">SUMMER SALE</p>
                <p className="mt-2 text-sm md:text-lg">For limited time only!</p>
                {/* <button className="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800">
                Shop Now
                </button> */}
            </div>

            {/* Image Section */}
            <div className="order-1 lg:order-2">
                <img
                className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]"
                src="https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                alt="Summer Sale"
                />
            </div>
            </div>
        </section>
  
      <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Summer styles are finally here
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
              if you live or die.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          alt=""
                          src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="Men"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>


    <section className="flex flex-col lg:h-screen justify-center items-center overflow-scroll">
  <div className="flex flex-wrap mx-auto md:flex-nowrap mt-6 border-t pt-12">
    {images.map((image, index) => (
      <div
        key={index}
        className="relative flex flex-col items-start m-1 transition ease-in-out duration-500 delay-150 transform md:w-96 md:ml-4 md:hover:translate-x-8 shrink-0"
      >
        <article
          className="mx-auto rounded-3xl overflow-hidden bg-cover ring-2 ring-inset ring-white/50 bg-center min-h-[150px] relative transform duration-500 group"
          style={{ backgroundImage: `url(${image.url})` }}
        >
          <div className="relative h-full group-hover:bg-opacity-0 flex flex-wrap flex-col pt-[30rem] transform duration-500">
            <div className="group-hover:bg-black/30 duration-500 group-hover:backdrop-blur p-8 lg:p-10 h-full justify-end flex flex-col">
              <p className="opacity-0 text-white text-sm 2xl:text-lg group-hover:opacity-80 transform duration-500">
                {image.description}
              </p>
            </div>
          </div>
        </article>
      </div>
    ))}
  </div>
</section>


    
    </>
  )
}

const images = [
    {
      url: 'https://www.ukmodels.co.uk/wp-content/uploads/2015/08/shutterstock_267639224.jpg',
      description:
        'Immerse yourself in a seamless experience where every touchpoint anticipates your needs. Description one.',
    },
    {
      url: 'https://i.pinimg.com/originals/61/4b/17/614b177dd231989f58165d60bc5be371.jpg',
      description:
        'Engage with a platform where interaction is intuitive, ensuring your journey is fluid and responsive. Description two.',
    },
    {
      url: 'https://th.bing.com/th/id/R.33742b7a1881ba41e82c4f4eeb2a8eeb?rik=qbhecLIGXgHZBw&pid=ImgRaw&r=0',
      description:
        'Discover our commitment to thoughtful design, prioritizing accessibility and user satisfaction. Description three.',
    },
    {
        url: 'https://i5.walmartimages.com/asr/f59d9934-5cc8-43fe-bfde-51ee0061e50d.df7c9558c056be5de204118d46cc82b6.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF',
        description:
          'Experience innovation at every step, with forward-thinking solutions designed to enhance your daily interactions. Description four.',
    },
    {
        url: 'https://th.bing.com/th/id/OIP.uHITpNjUwsVe5gunAh4hwgAAAA?rs=1&pid=ImgDetMain',
        description:
          'Join us in embracing sustainability, where design and functionality meet eco-conscious decisions. Description five.',
    },
    
  ];
  

export default Home;
