import restaurant from "../Images/restaurant.jpg";
import MarioAndAdrian from "../Images/Mario and Adrian A.jpg";
import React, { useEffect } from 'react';

const scrollToTopAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

const About = () => {
    useEffect(() => {
        scrollToTopAbout(); // Call the scrolling function when the component mounts
      }, []);
  return (
    <section>
    <div id="about-section">
      <div className="about">
        <div className="about-content">
          <h4>Little Lemon</h4>
          <h5>Chicago</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at
            ex leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque
            massa. Praesent ut molestie nisi. Aliquam arcu lorem, auctor
            condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in
            accumsan id, vehicula sit amet tellus. Pellentesque porttitor elit
            lacus, vitae lacinia magna ultricies quis. Etiam vitae tellus et mi
            hendrerit consequat. In dictum ligula in elit euismod malesuada.
            Curabitur varius augue id tempus ultricies. Mauris suscipit porta
            odio, et pretium nibh scelerisque ut.
          </p>
        </div>

        <div className="owners">
          <img id="MarioAdrian" src={MarioAndAdrian} alt="owners" />
          <img id="restaurant" src={restaurant} alt="restaturant" />
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;
export {scrollToTopAbout};