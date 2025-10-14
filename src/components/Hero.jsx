import React from 'react';
import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-600/50"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 animate-fadeIn">
            Plan it.<br />
            Live it.<br />
            See the World.
          </h1>
          <p className="text-xl text-white/90 mb-8 animate-fadeIn">
            Discover your next adventure with personalized travel experiences
          </p>
        </div>

        <SearchBar />
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
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