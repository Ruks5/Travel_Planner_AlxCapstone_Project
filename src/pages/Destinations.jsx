import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import MonacoHarbor from '../assets/Monaco Harbor.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DestinationCard from '../components/DestinationCard';
import { searchDestinations } from '../services/amadeusApi';


const popularDestinations = [
  {
    id: 1,
    name: 'Venice',
    country: 'Italy',
    iataCode: 'VCE',
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80',
    description: 'Experience the magic of floating city',
    latitude: 45.4408,
    longitude: 12.3155
  },
  {
    id: 2,
    name: 'London',
    country: 'United Kingdom',
    iataCode: 'LON',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
    description: 'Discover the blend of history and modernity',
    latitude: 51.5074,
    longitude: -0.1278
  },
  {
    id: 3,
    name: 'Santorini',
    country: 'Greece',
    iataCode: 'JTR',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
    description: 'Stunning sunsets and white-washed buildings',
    latitude: 36.3932,
    longitude: 25.4615
  },
  {
    id: 4,
    name: 'Monaco',
    country: 'Monaco',
    iataCode: 'MCM',
    image: MonacoHarbor ,
    description: 'Luxury and glamour in the Mediterranean',
    latitude: 43.7384,
    longitude: 7.4246
  }
];

const Destinations = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

  useEffect(() => {
    const query = searchParams.get('search');
    if (query) {
      handleSearch(query);
    }
  }, [searchParams]);

  const handleSearch = async (query) => {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);

    
    const matchedPopular = popularDestinations.filter(dest => 
      dest.name.toLowerCase().includes(query.toLowerCase()) ||
      dest.country.toLowerCase().includes(query.toLowerCase())
    );

    if (matchedPopular.length > 0) {
      
      setDestinations(matchedPopular);
      setLoading(false);
      return;
    }

    
    try {
      const response = await searchDestinations(query);
      
      const formattedDestinations = response.data.map((item) => ({
        id: item.id,
        name: item.name,
        country: item.address?.countryName || 'Unknown',
        iataCode: item.iataCode,
        image: `https://source.unsplash.com/800x600/?${encodeURIComponent(item.name)},city`,
        description: `${item.detailedName || item.name}`,
        latitude: item.geoCode?.latitude,
        longitude: item.geoCode?.longitude,
      }));

      setDestinations(formattedDestinations);
    } catch (err) {
      setError('Failed to fetch destinations. Please try again.');
      console.error('Error fetching destinations:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-sky-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Explore Destinations
          </h1>
          
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Search for a destination..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand text-lg"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-[#0c2145] hover:bg-[#102c63] text-white px-8 py-4 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Searching...' : 'Search'}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="spinner"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg mb-8">
            {error}
          </div>
        )}

        {!loading && !error && destinations.length === 0 && searchParams.get('search') && (
          <div className="text-center py-20">
            <svg className="w-24 h-24 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No destinations found</h3>
            <p className="text-gray-500 mb-6">Try searching for: Venice, London, Santorini, or Monaco</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setDestinations([]);
              }}
              className="text-sky-600 hover:text-sky-700 font-medium"
            >
              Clear search
            </button>
          </div>
        )}

        {!loading && destinations.length > 0 && (
          <>
            <div className="mb-6">
              <h2 className="text-2xl font-bold" style={{ color: '#0c2145' }}>
                Found {destinations.length} destination{destinations.length !== 1 ? 's' : ''}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations.map((destination) => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Destinations;
