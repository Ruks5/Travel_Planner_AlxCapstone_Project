import React from 'react';
import BookingLogo from '../assets/Booking.com_logo2.png';
import AirbnbLogo from '../assets/Airbnb_Logo_Bélo.svg.png';
import TripAdvisorLogo from '../assets/TripAdvisor_Logo.svg.png';
import WakanowLogo from '../assets/Wakanow-logo 1.png';

const TravelPackages = () => {
  const packages = [
    {
      id: 1,
      name: 'Maldives',
      price: 2500,
      rating: 4.8,
      reviews: 1234,
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
      
    },
    {
      id: 2,
      name: 'Luxury Apartment & Spa',
      price: 1800,
      rating: 4.9,
      reviews: 892,
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80',
      
    },
    {
      id: 3,
      name: 'Boutique Hotel & Spa',
      price: 950,
      rating: 4.7,
      reviews: 567,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      
    },
    {
      id: 4,
      name: 'Paradise Resort',
      price: 3200,
      rating: 4.9,
      reviews: 2156,
      image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80',
      
    },
  ];

  const sponsors = [BookingLogo, AirbnbLogo, TripAdvisorLogo, WakanowLogo];

  return (
    <section className="py-16 bg-white">
<div className="bg-gray-100 w-full py-8 mb-16">
  <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-evenly px-4 gap-6 ">

    <h3 className="text-lg font-semibold text-[#0c2145]">
      Our Travel Sponsors
    </h3>

       <div className="flex justify-evenly flex-wrap gap-4">
         {sponsors.map((logo, idx) => (
           <img
              key={idx}
              src={logo}
              alt={`Sponsor ${idx + 1}`}
              className="h-10 md:h-12 object-contain hover:scale-105 transition-transform"
             />
             ))}
           </div>

         </div>
       </div>

      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-semibold mb-2 text-[#0c2145]">Travel Packages</h2>
        <p className="text-gray-600">Handpicked trips and experiences from around the world.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img src={pkg.image} alt={pkg.name} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h4 className="font-bold text-lg mb-1">{pkg.name}</h4>
              <p className="text-gray-600 text-sm mb-3">{pkg.description}</p>
              <div className="flex items-center mb-3">
                <span className="text-yellow-400 mr-2">★</span>
                <span className="font-medium">{pkg.rating}</span>
                <span className="text-gray-500 text-sm ml-1">({pkg.reviews})</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-gray-500 text-sm">From</span>
                  <p className="text-xl font-bold text-[#0c2145]">${pkg.price}</p>
                </div>
                <button className="bg-[#0c2145] text-white px-4 py-2 rounded hover:bg-[#1a2d5c] transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelPackages;
