import React from 'react';
import HeroImage from '../assets/Hero Image.png';


const Hero = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${HeroImage})`
        }}
      >
        <div
            className="absolute inset-0"
            style={{
            backgroundColor: 'rgba(12, 33, 69, 0.2)', 
            }}
           ></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
         <h1 className="leading-tight text-white animate-fadeIn">
          <span className="text-4xl md:text-5xl font-extrabold">Plan it.</span><br />
          <span className="text-5xl md:text-7xl font-extrabold">Live it.</span><br />
          <span className="text-6xl md:text-7xl font-extrabold">See the World.</span>
         </h1>
        
        </div>

        
      </div>
  
      </div>
  );
};

export default Hero;