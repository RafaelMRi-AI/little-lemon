import restaurantFood from '../Images/restaurantFood.jpg';

import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import BookingForm from "./BookingForm";


/* const scrollToTopCallToAction = () => {
    const homeCallToAction = document.getElementById('home-CallToAction');
    if (homeCallToAction) {
      homeCallToAction.scrollIntoView({ behavior: 'smooth' });
    }
  }; */

  const scrollToTopCallToAction = () => {
    const homeCallToAction = document.getElementById('home-CallToAction');
    
    if (homeCallToAction && typeof homeCallToAction.scrollIntoView === 'function') {
      homeCallToAction.scrollIntoView({ behavior: 'smooth' });
    }
  };


const Hero = () => {
  
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleReservationClick = () => {
    setShowBookingForm(true);
  };

  useEffect(() => {
    scrollToTopCallToAction(); // Call the scrolling function when the component mounts
  }, []);

  
  
  return (
    <section>
    <div id="home-CallToAction">
      <div className="main">
        <div className="main-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>

          <Link to="/booking">
            <button id="button" to="/booking">
              Reserve a Table
            </button>
          </Link>  
          
        </div>

        <div className="featured">
          <img src={restaurantFood} alt="restaurantFood" />
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
export {scrollToTopCallToAction}