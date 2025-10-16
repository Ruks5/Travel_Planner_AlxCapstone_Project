import React from 'react';
import DestinationCard from './DestinationCard';

const PopularDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: 'Venice, Italy',
      image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80',
      description: 'Experience the magic of floating city'
    },
    {
      id: 2,
      name: 'London, UK',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
      description: 'Discover the blend of history and modernity'
    },
    {
      id: 3,
      name: 'Santorini, Greece',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
      description: 'Stunning sunsets and white-washed buildings'
    },
    {
      id: 4,
      name: 'Monacco City',
      image: 'https://images.unsplash.com/photo-1520106212299-d99c443e4568?w=800&q=80',
      description: 'Explore the luxury lifestyle'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
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