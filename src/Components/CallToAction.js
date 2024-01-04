import restaurantFood from '../Images/restaurantFood.jpg';

import React, { useEffect } from 'react';

const scrollToTopCallToAction = () => {
    const homeCallToAction = document.getElementById('home-CallToAction');
    if (homeCallToAction) {
      homeCallToAction.scrollIntoView({ behavior: 'smooth' });
    }
  };


const Hero = () => {
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

          <a href="#" className="a">
            <button id="button" to="/reservations">
              Reserve a Table
            </button>
          </a>
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