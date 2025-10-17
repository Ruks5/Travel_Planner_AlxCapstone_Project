import React from 'react';
import DestinationCard from './DestinationCard';
import venice from '../assets/Venice Italy.png';
import london from '../assets/London Uk.png';
import santorini from '../assets/santorini greece.png';
import monaco from '../assets/monaco city.png';

const PopularDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: 'Venice, Italy',
      image: venice,
      description: 'Experience the magic of the floating city',
    },
    {
      id: 2,
      name: 'London, UK',
      image: london,
      description: 'Discover the blend of history and modernity',
    },
    {
      id: 3,
      name: 'Santorini, Greece',
      image: santorini,
      description: 'Marvel at the whitewashed beauty of the Aegean',
    },
    {
      id: 4,
      name: 'Monaco City',
      image: monaco,
      description: 'Explore the luxury lifestyle',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
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
          <button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;