import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MonacoHarbor from '../assets/Monaco harbor.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getFlightOffers, getHotelOffers, getPointsOfInterest } from '../services/amadeusApi';

// Destination data
const destinationsData = {
  '1': {
    name: 'Venice',
    country: 'Italy',
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1600&q=80',
    description: 'Experience the magic of the floating city with its romantic canals, stunning architecture, and rich cultural heritage.',
    cityCode: 'VCE',
    latitude: 45.4408,
    longitude: 12.3155,
    rating: 4.9,
    reviews: 3254
  },
  '2': {
    name: 'London',
    country: 'United Kingdom',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&q=80',
    description: 'Discover the blend of history and modernity in this vibrant capital, home to iconic landmarks, world-class museums, and diverse culture.',
    cityCode: 'LON',
    latitude: 51.5074,
    longitude: -0.1278,
    rating: 4.8,
    reviews: 5621
  },
  '3': {
    name: 'Santorini',
    country: 'Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1600&q=80',
    description: 'Stunning sunsets, white-washed buildings, and crystal-clear waters make this Greek island paradise unforgettable.',
    cityCode: 'JTR',
    latitude: 36.3932,
    longitude: 25.4615,
    rating: 4.9,
    reviews: 4182
  },
  '4': {
    name: 'Monaco',
    country: 'Monaco',
    image: MonacoHarbor,
    description: 'Luxury and glamour await in this stunning Mediterranean principality, known for its casinos, yacht-lined harbor, and prestigious Grand Prix.',
    cityCode: 'MCM',
    latitude: 43.7384,
    longitude: 7.4246,
    rating: 4.8,
    reviews: 2847
  }
};

const DestinationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [flights, setFlights] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [attractions, setAttractions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [weather] = useState({ temp: 18, condition: 'Partly Cloudy' });

  // Get destination data using ID
  const destination = destinationsData[id] || destinationsData['1'];

  const loadFlights = async () => {
    setLoading(true);
    try {
      const today = new Date();
      const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
      const departureDate = nextWeek.toISOString().split('T')[0];
      
      // Using NYC as origin for demo purposes
      const response = await getFlightOffers('NYC', destination.cityCode, departureDate);
      setFlights(response.data || []);
    } catch (error) {
      console.error('Error loading flights:', error);
      setFlights([]);
    } finally {
      setLoading(false);
    }
  };

  const loadHotels = async () => {
    setLoading(true);
    try {
      const response = await getHotelOffers(destination.cityCode);
      setHotels(response.data || []);
    } catch (error) {
      console.error('Error loading hotels:', error);
      setHotels([]);
    } finally {
      setLoading(false);
    }
  };

  const loadAttractions = async () => {
    setLoading(true);
    try {
      const response = await getPointsOfInterest(destination.latitude, destination.longitude);
      setAttractions(response.data || []);
    } catch (error) {
      console.error('Error loading attractions:', error);
      setAttractions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Reset data when destination changes
    setFlights([]);
    setHotels([]);
    setAttractions([]);
    setActiveTab('overview');
  }, [id]);

  useEffect(() => {
    if (activeTab === 'flights' && flights.length === 0) {
      loadFlights();
    } else if (activeTab === 'hotels' && hotels.length === 0) {
      loadHotels();
    } else if (activeTab === 'attractions' && attractions.length === 0) {
      loadAttractions();
    }
  }, [activeTab, id]);

  const addToItinerary = () => {
    const itinerary = JSON.parse(localStorage.getItem('itinerary') || '[]');
    
    const alreadyExists = itinerary.some(item => item.id === destination.cityCode);
    if (alreadyExists) {
      alert('This destination is already in your itinerary!');
      return;
    }

    itinerary.push({
      id: destination.cityCode,
      name: destination.name,
      country: destination.country,
      image: destination.image,
      addedAt: new Date().toISOString()
    });
    localStorage.setItem('itinerary', JSON.stringify(itinerary));
    alert(`${destination.name} added to itinerary!`);
  };

  const getAttractionsList = () => {
    const attractionsByCity = {
      'Venice': ['St. Mark\'s Basilica', 'Grand Canal', 'Rialto Bridge', 'Doge\'s Palace', 'Bridge of Sighs', 'Piazza San Marco'],
      'London': ['Big Ben', 'Tower of London', 'British Museum', 'London Eye', 'Buckingham Palace', 'Tower Bridge'],
      'Santorini': ['Oia Village', 'Red Beach', 'Akrotiri Archaeological Site', 'Fira Town', 'Santo Winery', 'Amoudi Bay'],
      'Monaco': ['Monte Carlo Casino', 'Prince\'s Palace', 'Oceanographic Museum', 'Monaco Grand Prix Circuit', 'Japanese Garden', 'Port Hercules']
    };
    return attractionsByCity[destination.name] || [];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="relative h-96 mt-20">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <button
              onClick={() => navigate(-1)}
              className="mb-4 text-white hover:text-sky-200 flex items-center transition-colors"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
            <h1 className="text-5xl font-bold text-white mb-2">{destination.name}</h1>
            <p className="text-xl text-white/90">{destination.country}</p>
            <div className="flex items-center mt-4 space-x-6">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-white font-semibold">{destination.rating}</span>
                <span className="text-white/80 ml-2">({destination.reviews} reviews)</span>
              </div>
              <div className="flex items-center text-white">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                {weather.temp}°C - {weather.condition}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#0c2145' }}>About {destination.name}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {destination.description}
              </p>
            </div>
            <button
              onClick={addToItinerary}
              className="ml-6 bg-[#0c2145] hover:bg-[#0a1b39] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Add to Itinerary
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex border-b">
            {['overview', 'flights', 'hotels', 'attractions'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 px-6 font-semibold text-center transition-all ${
                  activeTab === tab
                    ? 'bg-[#0c2145] text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="p-8">
            {loading && (
              <div className="flex justify-center py-12">
                <div className="spinner"></div>
              </div>
            )}

            {activeTab === 'overview' && !loading && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-6" style={{ color: '#0c2145' }}>Why Visit {destination.name}</h3>
                  <div className="prose prose-lg max-w-none text-gray-600">
                    <p className="mb-4">
                      {destination.name} offers an unforgettable travel experience with its unique blend of culture, history, and natural beauty.
                    </p>
                    <p>
                      Whether you're seeking adventure, relaxation, or cultural immersion, this destination has something special for every traveler.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'flights' && !loading && (
              <div>
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#0c2145' }}>Available Flights to {destination.name}</h3>
                {flights.length === 0 ? (
                  <div className="text-center py-12">
                    <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <p className="text-gray-600">No flights available at the moment. Please try again later.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {flights.slice(0, 5).map((flight, index) => (
                      <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <div className="flex justify-between items-center">
                          <div className="flex-1">
                            <div className="flex items-center space-x-4 mb-2">
                              <span className="font-semibold text-lg">
                                {flight.itineraries[0].segments[0].departure.iataCode}
                              </span>
                              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                              <span className="font-semibold text-lg">
                                {flight.itineraries[0].segments[flight.itineraries[0].segments.length - 1].arrival.iataCode}
                              </span>
                            </div>
                            <p className="text-gray-600 text-sm">
                              Duration: {flight.itineraries[0].duration}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-3xl font-bold" style={{ color: '#0c2145' }}>${flight.price.total}</p>
                            <p className="text-gray-500 text-sm">{flight.price.currency}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'hotels' && !loading && (
              <div>
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#0c2145' }}>Accommodations in {destination.name}</h3>
                {hotels.length === 0 ? (
                  <div className="text-center py-12">
                    <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <p className="text-gray-600">No hotels available at the moment. Please try again later.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {hotels.slice(0, 6).map((hotel, index) => (
                      <div key={index} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="h-48 bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center">
                          <svg className="w-16 h-16 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div className="p-6">
                          <h4 className="font-bold text-lg mb-2" style={{ color: '#0c2145' }}>{hotel.hotel.name}</h4>
                          <p className="text-gray-600 text-sm mb-4">
                            {hotel.hotel.cityCode}
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-2xl font-bold" style={{ color: '#0c2145' }}>
                              ${hotel.offers[0].price.total}
                            </span>
                            <button className="bg-[#0c2145] hover:bg-[#0a1b39] text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'attractions' && !loading && (
              <div>
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#0c2145' }}>Top Attractions</h3>
                <div className="space-y-4">
                  {getAttractionsList().map((attraction, index) => (
                    <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <h4 className="font-bold text-lg mb-2" style={{ color: '#0c2145' }}>{attraction}</h4>
                      <p className="text-gray-600">Must-see landmark in {destination.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DestinationDetails;