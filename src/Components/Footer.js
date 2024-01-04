import React from 'react';
import Logo from '../Images/Logo.svg';
import { Link } from "react-router-dom";

import '../Styles/Footer.css';

import { scrollToTopHome } from './Home';
import { scrollToTopAbout } from './About';
import { scrollToTopSpecials } from './Specials';
import { scrollToTopCallToAction } from './CallToAction';



function Footer() {
  return (
  <footer>
    {<div className="footer">
        <div className="one">
          <img src={Logo} alt="Secondary Logo" />
        </div>
        <div className="two">
          <ul>
            <h5>Navigation</h5>
            <li>
              <Link to="/" onClick={scrollToTopHome} className="Link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" onClick={scrollToTopAbout} className="Link">
                About
              </Link>
            </li>
            <li>
              <Link to="/" onClick={scrollToTopSpecials} className="Link">
                menu
              </Link>
            </li>
            <li>
              <Link to="/" onClick={scrollToTopCallToAction} className="Link">
                Reservations
              </Link>
            </li>
            <li>
            <a href="#" className="a">Order Online</a>
            </li>
            <li>
            <a href="#" className="a">Login</a>
            </li>
          </ul>
        </div>
        <div className="three">
          <ul>
            <h5>Contact</h5>
            <li>
              <a href="#" className="a">
                Address
              </a>
            </li>
            <li>
              <a href="#" className="a">
                Phone Number
              </a>
            </li>
            <li>
              <a href="#" className="a">
                Email
              </a>
            </li>
          </ul>
        </div>
        <div className="four">
          <ul>
            <h5>Social Media</h5>

            <li>
              <a href="#" className="a">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="a">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="a">
                Pinterest
              </a>
            </li>
          </ul>
        </div>
      </div>}
    &copy; 2023 Little Lemon. All rights reserved.
    </footer>
    );
}

export default Footer;