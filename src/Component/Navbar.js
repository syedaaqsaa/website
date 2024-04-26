import React from 'react';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/About">About</NavLink></li>
        <li><NavLink to="/Contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;