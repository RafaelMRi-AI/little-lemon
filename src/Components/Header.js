import React from 'react';
import Logo from '../Images/Logo.svg';

function Header() {
  return (
  <header>
    {<img src={Logo} alt="Little Lemon Logo" />}
    </header>
    );
}

export default Header;