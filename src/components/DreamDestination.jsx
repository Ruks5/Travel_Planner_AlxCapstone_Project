import React from 'react';

const DreamDestination = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80"
                alt="Travel destination"
                className="rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-sky-500 rounded-3xl -z-10"></div>
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-yellow-400 rounded-3xl -z-10"></div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              We will help you find your dream destination
            </h2>
            
            <p className="text-lg text-gray-600">
              You have been waiting for that much needed vacation and the time is now. Let us take the hassle out of planning from recommending destinations to curating activities.
            </p>
            
            <p className="text-lg text-gray-600">
              Our expert travel guides will ensure you have an unforgettable experience, tailored just for you.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="bg-sky-100 rounded-full p-3">
                    <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Expert Guides</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="bg-sky-100 rounded-full p-3">
                    <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Best Prices</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="bg-sky-100 rounded-full p-3">
                    <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">24/7 Support</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="bg-sky-100 rounded-full p-3">
                    <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Flexibility</span>
                </div>
              </div>
            </div>

            <button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl mt-8">
              Plan a Trip
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamDestination;