import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-green-600 p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-white text-2xl">Turf Booking</h1>
        <nav>
          <Link to="/" className="text-white mx-2">Home</Link>
          <Link to="/turfs" className="text-white mx-2">Turfs</Link>
          <Link to="/events" className="text-white mx-2">Events</Link>
          <Link to="/contact" className="text-white mx-2">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
