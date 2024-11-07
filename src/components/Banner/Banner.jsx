import React from 'react';

function Banner({ onShopNowClick }) {
  return (
    <section className="bg-purple-800 relative bg-cover bg-center h-[500px] sm:h-[600px] lg:h-[700px] flex items-center justify-center" >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <img className='w-[200px] h-[150px] absolute bottom-4 border-[2px]' src='/public/images/banner.jpg' alt="" />
      <div className="relative z-10 text-center text-white max-w-2xl mx-auto p-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          Discover the Latest Tech at Gadget Heaven
        </h1>
        <p className="mt-4 text-lg sm:text-xl lg:text-2xl font-medium">
          Elevate your experience with top-notch gadgets and accessories.
        </p>
        <button 
          onClick={onShopNowClick} 
          className="mt-8 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full shadow-lg transition transform hover:scale-105">
          Shop Now
        </button>
      </div>
    </section>
  );
}

export default Banner;
