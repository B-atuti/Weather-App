import React from 'react';
import 'tailwindcss/tailwind.css';

function NavBar() {
  const countries = [
    {
      id: 1,
      title: 'Brazil',
    },
    {
      id: 2,
      title: 'Russia',
    },
    {
      id: 3,
      title: 'India',
    },
    {
      id: 4,
      title: 'China',
    },
    {
      id: 5,
      title: 'South Africa',
    },
  ];

  return (
    <div className='flex items-center justify-around my-2'>
      {countries.map((country) => (
        <button key={country.id} className='text-white text-lg font-medium '>
          {country.title}
        </button>
      ))}
    </div>
  );
}

export default NavBar;
