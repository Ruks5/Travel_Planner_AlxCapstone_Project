import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Itinerary = () => {
  const [itinerary, setItinerary] = useState([]);
  const [tripName, setTripName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    const savedItinerary = JSON.parse(localStorage.getItem('itinerary') || '[]');
    setItinerary(savedItinerary);
  }, []);

  const removeFromItinerary = (index) => {
    const updated = itinerary.filter((_, i) => i !== index);
    setItinerary(updated);
    localStorage.setItem('itinerary', JSON.stringify(updated));
  };

  const clearItinerary = () => {
    setItinerary([]);
    localStorage.removeItem('itinerary');
  };

  const saveTrip = () => {
    if (!tripName || !startDate || !endDate) {
      alert('Please fill in all trip details');
      return;
    }

    const trip = {
      name: tripName,
      startDate,
      endDate,
      destinations: itinerary,
      createdAt: new Date().toISOString()
    };

    const savedTrips = JSON.parse(localStorage.getItem('savedTrips') || '[]');
    savedTrips.push(trip);
    localStorage.setItem('savedTrips', JSON.stringify(savedTrips));
    
    alert('Trip saved successfully!');
    setTripName('');
    setStartDate('');
    setEndDate('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              My Travel Itinerary
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Plan and organize your perfect trip
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {itinerary.length === 0 ? (
                <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                  <svg className="w-24 h-24 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <h3 className="text-2xl font-semibold text-gray-700 mb-2">No destinations added yet</h3>
                  <p className="text-gray-500 mb-6">Start exploring destinations and add them to your itinerary</p>
                  <a
                    href="/destinations"
                    className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
                  >
                    Explore Destinations
                  </a>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {itinerary.length} Destination{itinerary.length !== 1 ? 's' : ''}
                    </h2>
                    <button
                      onClick={clearItinerary}
                      className="text-red-600 hover:text-red-700 font-medium transition-colors"
                    >
                      Clear All
                    </button>
                  </div>

                  {itinerary.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="flex">
                        <div className="w-48 h-48 flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 p-6">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.name}</h3>
                              <p className="text-gray-600 mb-4">{item.country}</p>
                              <p className="text-sm text-gray-500">
                                Added: {new Date(item.addedAt).toLocaleDateString()}
                              </p>
                            </div>
                            <button
                              onClick={() => removeFromItinerary(index)}
                              className="text-red-600 hover:text-red-700 p-2 transition-colors"
                            >
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                          
                          <div className="mt-4 flex space-x-4">
                            <button className="text-brand hover:text-sky-700 font-medium transition-colors text-sm">
                              Add Notes
                            </button>
                            <button className="text-brand hover:text-sky-700 font-medium transition-colors text-sm">
                              Set Dates
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Trip Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Trip Name
                    </label>
                    <input
                      type="text"
                      value={tripName}
                      onChange={(e) => setTripName(e.target.value)}
                      placeholder="e.g.Summer holiday"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Start Date
                    </label>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      End Date
                    </label>
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <button
                    onClick={saveTrip}
                    disabled={itinerary.length === 0}
                    className="w-full bg-[#0c2145] hover:bg-[#102c63] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed mt-6"
                  >
                    Save Trip
                  </button>

                  <div className="mt-8 pt-6 border-t">
                    <h4 className="font-semibold text-gray-900 mb-4">Trip Summary</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Destinations:</span>
                        <span className="font-semibold text-gray-900">{itinerary.length}</span>
                      </div>
                      {startDate && endDate && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Duration:</span>
                          <span className="font-semibold text-gray-900">
                            {Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24))} days
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Itinerary;