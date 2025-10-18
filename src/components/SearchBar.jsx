import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [activeTab, setActiveTab] = useState('Accommodation');
  const [searchQuery, setSearchQuery] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const navigate = useNavigate();

  const tabs = ['Accommodation', 'Flights', 'Hotel', 'Restaurants'];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/destinations?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-6 max-w-5xl mx-auto">
      
      <div className="flex space-x-4 mb-6 border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 px-4 font-medium ${
              activeTab === tab ? 'border-b-2 border-sky-900 text-brand' : 'text-gray-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      
      <form onSubmit={handleSearch}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          
          <div>
            <label className="block text-sm font-medium mb-1">Destination</label>
            <input
              type="text"
              placeholder="Where to..?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>

          
          <div>
            <label className="block text-sm font-medium mb-1">Check-in</label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>

          
          <div>
            <label className="block text-sm font-medium mb-1">Check-out</label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>

        
          <div>
            <button
              type="submit"
              className="bg-[#0c2145] hover:bg-[#102c63] text-white font-semibold py-3 px-16 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
