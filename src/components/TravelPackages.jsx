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

  const sponsors = [
    { logo: BookingLogo, name: 'Booking.com' },
    { logo: AirbnbLogo, name: 'Airbnb' },
    { logo: TripAdvisorLogo, name: 'TripAdvisor' },
    { logo: WakanowLogo, name: 'Wakanow' }
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      
      <div className="bg-gray-100 w-full py-8 md:py-10 mb-16 md:mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          
          <div className="block md:hidden space-y-6">
            <h3 className="text-base font-semibold text-[#0c2145] text-center">
              Our Travel Sponsors
            </h3>
            <div className="grid grid-cols-2 gap-6 justify-items-center">
              {sponsors.map((sponsor, idx) => (
                <img
                  key={idx}
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-8 object-contain hover:scale-105 transition-transform"
                />
              ))}
            </div>
          </div>

          
          <div className="hidden md:flex items-center justify-between gap-8 lg:gap-12">
            <h3 className="text-lg lg:text-xl font-semibold text-[#0c2145] whitespace-nowrap flex-shrink-0">
              Our Travel Sponsors
            </h3>
            
            <div className="flex items-center justify-evenly flex-1 gap-6 lg:gap-10">
              {sponsors.map((sponsor, idx) => (
                <img
                  key={idx}
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-10 lg:h-12 object-contain hover:scale-110 transition-transform duration-300 flex-shrink-0"
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-2 md:mb-3 text-[#0c2145]">
            Travel Packages
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600">
            Handpicked trips and experiences from around the world.
          </p>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              
              <div className="relative h-48 md:h-56">
                <img 
                  src={pkg.image} 
                  alt={pkg.name} 
                  className="w-full h-full object-cover" 
                />
                <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              
              <div className="p-4 md:p-5">
                <h4 className="font-bold text-base md:text-lg mb-1 text-[#0c2145] line-clamp-1">
                  {pkg.name}
                </h4>
                
                {pkg.description && (
                  <p className="text-gray-600 text-xs md:text-sm mb-3 line-clamp-2">
                    {pkg.description}
                  </p>
                )}

                
                <div className="flex items-center mb-3 md:mb-4">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-medium text-sm md:text-base">{pkg.rating}</span>
                  <span className="text-gray-500 text-xs md:text-sm ml-1">({pkg.reviews})</span>
                </div>

    
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <span className="text-gray-500 text-xs md:text-sm block">From</span>
                    <p className="text-lg md:text-xl font-bold text-[#0c2145]">${pkg.price}</p>
                  </div>
                  <button className="bg-[#0c2145] text-white px-3 md:px-4 py-2 rounded-md text-sm md:text-base hover:bg-[#1a2d5c] transition-colors whitespace-nowrap">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelPackages;