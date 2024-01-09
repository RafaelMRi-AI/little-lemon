import * as React from "react";
import { Link } from "react-router-dom";

import '../Styles/Nav.css';

import { scrollToTopHome } from './Home';
import { scrollToTopAbout } from './About';
import { scrollToTopSpecials } from './Specials';
import { scrollToTopCallToAction } from './CallToAction';






function Nav() {
 
  return (
    <nav>
      <ul>
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
    </nav>
  );
}

export default Nav;