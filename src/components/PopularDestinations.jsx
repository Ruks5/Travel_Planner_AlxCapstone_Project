import React from 'react';
import DestinationCard from './DestinationCard';
import VeniceItaly from '../assets/Venice Italy.png';
import LondonUK from '../assets/London Uk.png';
import SantoriniGreece from '../assets/Santorini Greece.png';
import Monacocity from '../assets/Monaco city.png';

const PopularDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: 'Venice, Italy',
      image: VeniceItaly,
      description: 'The floating city'
    },
    {
      id: 2,
      name: 'London, UK',
      image: LondonUK,
      description: 'Explore historical landmarks'
    },
    {
      id: 3,
      name: 'Santorini, Greece',
      image: SantoriniGreece,
      description: 'Stunning sunsets and crystal-clear waters'
    },
    {
      id: 4,
      name: 'Monaco',
      image: Monacocity,
      description: 'Home of the prestigious Grand Prix'
    }
  ];

  return (
    <section className="py-20 px-4 bg-w">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Popular Destinations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover, plan and experience unforgettable journeys with ease.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#0c2145] hover:bg-[#102c63] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;