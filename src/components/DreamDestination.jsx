import React from 'react';
import TravelGuide from '../assets/Travel Guide.svg';

const DreamDestination = () => {
  return (
    <section
      className="py-20 px-4"
      style={{ backgroundColor: 'rgba(237, 174, 73, 0.1)' }} 
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
             src={TravelGuide}
             alt="Travel Guide"
            className="rotate-3 hover:rotate-0 transition-transform duration-500 mix-blend-multiply"
            />

          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight" style={{ color: '#0c2145' }}>
            We will help you find your dream destination
            </h2>

            <p className="text-lg text-gray-600">
              You have been waiting for that much needed vacation and the time is now. Let us take the stress out of planning, from choosing destinations to curating activities.
            </p>

            <p className="text-lg text-gray-600">
              We will design the perfect travel experience, tailored just for you.
              Our expert travel guides will ensure you have an unforgettable experience.
            </p>

            
            <button className="bg-[#0c2145] hover:bg-[#102c63] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl mt-8">
              Let's Plan It
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamDestination;
