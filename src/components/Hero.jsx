import React from 'react';
import SearchBar from './SearchBar';
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
            backgroundColor: 'rgba(12, 33, 69, 0.2)', // #0c2145 with 20% opacity
            }}
           ></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 animate-fadeIn">
            Plan it.<br />
            Live it.<br />
            See the World.
          </h1>
        
        </div>

        <SearchBar />
      </div>

      <div className="absolute bottom-8 center-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;