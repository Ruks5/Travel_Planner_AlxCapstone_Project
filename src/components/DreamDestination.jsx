import React from 'react';
import TravelGuide from '../assets/Travel Guide.svg';

const DreamDestination = () => {
  return (
    <section
      className="py-20 px-4"
      style={{ backgroundColor: 'rgba(237, 174, 73, 0.1)' }} // #EDAE49 with 10% opacity
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={TravelGuide}
              alt="Travel Guide"
              className="rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              We will help you find your dream destination
            </h2>

            <p className="text-lg text-gray-600">
              You have been waiting for that much needed vacation and the time is now. Let us take the stress out of planning, from choosing destinations to curating activities.
              We will design the perfect travel experience, tailored just for you.
              Our expert travel guides will ensure you have an unforgettable experience.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              {['Expert Guides', 'Best Prices', '24/7 Support', 'Flexibility'].map((text, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="bg-sky-100 rounded-full p-3">
                      <svg
                        className="w-6 h-6 text-sky-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{text}</span>
                  </div>
                </div>
              ))}
            </div>

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
