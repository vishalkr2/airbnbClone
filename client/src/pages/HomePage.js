import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import { getDestinations } from '../api';
import './HomePage.css';

function HomePage() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      const data = await getDestinations();
      setDestinations(data);
    };

    fetchDestinations();
  }, []);

  const heroContentStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '20px 10px',
    color: 'white',
    textAlign: 'center',
    borderRadius: '10px',
    maxWidth: '300px',
    marginLeft: '10px',
    animation: 'fadeIn 2s ease-in-out',
  };

  return (
    <div className="homepage">
      <div className="hero">
        <img src="/images/cover.jpg" alt="Cover" className="hero-image" />
        <div className="hero-content" style={heroContentStyle}>
          <h1>Welcome to TravelBnB</h1>
          <p>Find the best places to stay for your next trip.</p>
          <SearchBar />
        </div>
      </div>
      <section className="featured-destinations">
        <h2>Featured Destinations</h2>
        <div className="destinations">
          {destinations.map((destination) => (
            <div key={destination._id} className="destination">
              <img src={destination.image} alt={destination.name} />
              <h3>{destination.name}</h3>
              <p>{destination.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="why-us">
        <h2>Why Choose TravelBnB?</h2>
        <div className="benefits">
          <div className="benefit">
            <h3>Wide Selection</h3>
            <p>Choose from a wide range of properties to suit your needs.</p>
          </div>
          <div className="benefit">
            <h3>Best Prices</h3>
            <p>Get the best prices for your stay with our competitive rates.</p>
          </div>
          <div className="benefit">
            <h3>24/7 Support</h3>
            <p>Our support team is available 24/7 to assist you with any queries.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
