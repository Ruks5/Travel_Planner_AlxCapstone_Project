import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PopularDestinations from '../components/PopularDestinations';
import TravelPackages from '../components/TravelPackages';
import DreamDestination from '../components/DreamDestination';
import ReadyForTrip from '../components/ReadyForTrip';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PopularDestinations />
      <TravelPackages />
      <DreamDestination />
      <ReadyForTrip />
      <Footer />
    </div>
  );
};

export default Home;