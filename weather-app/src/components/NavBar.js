import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-blue-400 p-5 w-full mt-5 px-64 shadow-md">
      <div className="flex justify-between items-center">
        <div>
          <Link to="/" className="text-white text-2xl font-bold">
            Weather App
          </Link>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Link
          to="/daily"
          className="text-black mr-4 bg-white p-2 rounded-lg shadow-blue-300 hover:text-white hover:bg-black transition duration-300"
        >
          Daily
        </Link>
        <Link
          to="/weekly"
          className="text-black bg-white p-2 rounded-lg shadow-blue-300 hover:text-white hover:bg-black transition duration-300"
        >
          Weekly
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
