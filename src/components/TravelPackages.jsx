import React from 'react';
import BookingLogo from '../assets/Booking.com_logo2.png';
import AirbnbLogo from '../assets/Airbnb_Logo_Bélo.svg.png';
import TripAdvisorLogo from '../assets/TripAdvisor_Logo.svg.png';
import WakanowLogo from '../assets/Wakanow-logo 1.png';

const TravelPackages = () => {
  const packages = [
    {
      id: 1,
      name: 'Maldives Relaxation',
      price: 2500,
      rating: 4.8,
      reviews: 1234,
      image:
        'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
      description: 'Luxury overwater bungalows',
    },
    {
      id: 2,
      name: 'Luxury Apartment & Spa',
      price: 1800,
      rating: 4.9,
      reviews: 892,
      image:
        'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80',
      description: 'Modern comfort with spa access',
    },
    {
      id: 3,
      name: 'Authentic Boutique Hotel',
      price: 950,
      rating: 4.7,
      reviews: 567,
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      description: 'Traditional Greek hospitality',
    },
    {
      id: 4,
      name: 'Luxury Resort Hotel & Spa',
      price: 3200,
      rating: 4.9,
      reviews: 2156,
      image:
        'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80',
      description: 'Ultimate relaxation paradise',
    },
  ];

  const sponsors = [
    { logo: BookingLogo },
    { logo: AirbnbLogo },
    { logo: TripAdvisorLogo },
    { logo: WakanowLogo },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      {/* FULL-WIDTH SPONSOR SECTION */}
      <div className="w-screen bg-gray-100 py-10 mb-16 relative left-[50%] right-[50%] -mx-[50vw]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center md:justify-start gap-x-12 gap-y-6 px-6">
          {/* Text and Logos on same row */}
          <div className="flex items-center flex-wrap gap-x-10 gap-y-6">
            <h3
              className="text-base md:text-lg font-semibold whitespace-nowrap"
              style={{ color: '#0c2145' }}
            >
              Our Travel Sponsors
            </h3>

            <div className="flex items-center flex-wrap gap-x-16 gap-y-8">
              {sponsors.map((sponsor, index) => (
                <img
                  key={index}
                  src={sponsor.logo}
                  alt={`Sponsor ${index + 1}`}
                  className="h-10 md:h-12 object-contain transition-transform duration-300 hover:scale-110"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SECTION HEADING */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2
          className="text-4xl md:text-5xl font-semibold mb-4"
          style={{ color: '#0c2145' }}
        >
          Travel Packages
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          The best travel packages and recommendations from around the world.
        </p>
      </div>

      {/* PACKAGE CARDS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="relative h-56">
              <img
                src={pkg.image}
                alt={pkg.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                <svg
                  className="w-6 h-6 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">{pkg.name}</h4>
              <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>

              <div className="flex items-center mb-4">
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="ml-2 text-gray-700 font-semibold">
                  {pkg.rating}
                </span>
                <span className="ml-2 text-gray-500 text-sm">
                  ({pkg.reviews})
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm text-gray-500">From</span>
                  <p
                    className="text-2xl font-bold"
                    style={{ color: '#0c2145' }}
                  >
                    ${pkg.price}
                  </p>
                </div>
                <button
                  className="text-white px-5 py-2 rounded-md font-medium transition-all duration-300 shadow-md"
                  style={{
                    backgroundColor: '#0c2145',
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = '#1a2d5c')
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = '#0c2145')
                  }
                >
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
