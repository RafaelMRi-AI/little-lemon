import React from 'react';
import Logo from '../Images/Logo.svg';
import '../App.css';
import Nav from './Nav'


function Header() {
  return (
    <header>
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="navigation">
          <Nav />
        </div>
      </div>
    </header>
  );
}

export default Header;