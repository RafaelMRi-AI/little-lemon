import Header from "./Header";
import CallToAction from "./CallToAction";
import Specials from "./Specials";
import About from "./About";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

import React, { useEffect } from 'react';

const scrollToTopHome = () => {
    const homeSection = document.getElementById('home-section');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

const Home = () => {
    useEffect(() => {
        scrollToTopHome(); // Call the scrolling function when the component mounts
      }, []);
  return (
    <main>
    <div id="home-section">
      <Header />
      <CallToAction />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </div>
    </main>
  );
};

export default Home
export {scrollToTopHome };