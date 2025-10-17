import React from 'react';
import Readyforyournexttrip from '../assets/Ready for your next trip.png';

const ReadyForTrip = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden h-[70vh] shadow-2xl">

          <img
            src={Readyforyournexttrip}
            alt="Ready for your next trip"
            className="w-full h-full object-cover"
          />

          <div
            className="absolute inset-0"
            style={{
            backgroundColor: 'rgba(12, 33, 69, 0.2)', // #0c2145 with 20% opacity
            }}
           ></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
              Ready For Your Next Trip?
            </h2>
            
          <button className="bg-[#0c2145] hover:bg-[#102c63] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
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
