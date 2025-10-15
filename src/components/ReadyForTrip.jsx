import React from 'react';

const ReadyForTrip = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden h-96 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1589197331516-6c0c9a4ab4d7?w=1600&q=80"
            alt="Tropical destination"
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60"></div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
              Ready For Your Next Trip?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Start planning your dream vacation today with personalized recommendations
            </p>
            <button className="bg-white hover:bg-gray-100 text-sky-600 font-bold py-4 px-12 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-lg">
              Book Now
            </button>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/90 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default ReadyForTrip;