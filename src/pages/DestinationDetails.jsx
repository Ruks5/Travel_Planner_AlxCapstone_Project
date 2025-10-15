import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getFlightOffers, getHotelOffers, getPointsOfInterest } from '../services/amadeusApi';

const DestinationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [flights, setFlights] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [attractions, setAttractions] = useState([]);
  const [loading, setLoading] = useState(false);

  const destination = {
    id,
    name: 'Paris',
    country: 'France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600&q=80',
    description: 'The City of Light beckons with its iconic landmarks, world-class museums, and romantic atmosphere.',
    weather: { temp: 18, condition: 'Partly Cloudy' },
    rating: 4.8,
    reviews: 2847
  };

  const loadFlights = async () => {
    setLoading(true);
    try {
      const today = new Date();
      const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
      const departureDate = nextWeek.toISOString().split('T')[0];
      
      const response = await getFlightOffers('NYC', 'PAR', departureDate);
      setFlights(response.data || []);
    } catch (error) {
      console.error('Error loading flights:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadHotels = async () => {
    setLoading(true);
    try {
      const response = await getHotelOffers('PAR');
      setHotels(response.data || []);
    } catch (error) {
      console.error('Error loading hotels:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadAttractions = async () => {
    setLoading(true);
    try {
      const response = await getPointsOfInterest(48.8566, 2.3522);
      setAttractions(response.data || []);
    } catch (error) {
      console.error('Error loading attractions:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'flights' && flights.length === 0) {
      loadFlights();
    } else if (activeTab === 'hotels' && hotels.length === 0) {
      loadHotels();
    } else if (activeTab === 'attractions' && attractions.length === 0) {
      loadAttractions();
    }
  }, [activeTab]);

  const addToItinerary = () => {
    const itinerary = JSON.parse(localStorage.getItem('itinerary') || '[]');
    itinerary.push({
      id: destination.id,
      name: destination.name,
      country: destination.country,
      image: destination.image,
      addedAt: new Date().toISOString()
    });
    localStorage.setItem('itinerary', JSON.stringify(itinerary));
    alert('Added to itinerary!');
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
              className="mb-4 text-white hover:text-sky-200 flex items-center"
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
                {destination.weather.temp}°C - {destination.weather.condition}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About {destination.name}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {destination.description}
              </p>
            </div>
            <button
              onClick={addToItinerary}
              className="ml-6 bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
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
                    ? 'bg-sky-600 text-white'
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Visit</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-sky-100 rounded-full p-3">
                        <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">World-Class Museums</h4>
                        <p className="text-gray-600">Home to the Louvre, Musée d'Orsay, and more</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-sky-100 rounded-full p-3">
                        <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Iconic Landmarks</h4>
                        <p className="text-gray-600">Eiffel Tower, Arc de Triomphe, Notre-Dame</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-sky-100 rounded-full p-3">
                        <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Fashion & Shopping</h4>
                        <p className="text-gray-600">Champs-Élysées and luxury boutiques</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-sky-100 rounded-full p-3">
                        <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Culinary Excellence</h4>
                        <p className="text-gray-600">Michelin-starred restaurants and cafés</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'flights' && !loading && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Available Flights</h3>
                {flights.length === 0 ? (
                  <p className="text-gray-600">No flights available at the moment.</p>
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
                            <p className="text-3xl font-bold text-sky-600">${flight.price.total}</p>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Accommodations</h3>
                {hotels.length === 0 ? (
                  <p className="text-gray-600">No hotels available at the moment.</p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {hotels.slice(0, 6).map((hotel, index) => (
                      <div key={index} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="h-48 bg-gray-200"></div>
                        <div className="p-6">
                          <h4 className="font-bold text-lg text-gray-900 mb-2">{hotel.hotel.name}</h4>
                          <p className="text-gray-600 text-sm mb-4">
                            {hotel.hotel.cityCode}
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-2xl font-bold text-sky-600">
                              ${hotel.offers[0].price.total}
                            </span>
                            <button className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Top Attractions</h3>
                {attractions.length === 0 ? (
                  <div className="space-y-4">
                    {['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral', 'Arc de Triomphe', 'Sacré-Cœur', 'Champs-Élysées'].map((attraction, index) => (
                      <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <h4 className="font-bold text-lg text-gray-900 mb-2">{attraction}</h4>
                        <p className="text-gray-600">Must-see landmark in Paris</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {attractions.map((attraction, index) => (
                      <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <h4 className="font-bold text-lg text-gray-900 mb-2">{attraction.name}</h4>
                        <p className="text-gray-600">{attraction.category}</p>
                      </div>
                    ))}
                  </div>
                )}
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