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
    <div className='flex flex-row items-center justify-around mx-1'>
      {countries.map((country) => (
        <button key={country.id} className='text-black text-lg font-medium border-x-8 border-transparent hover:text-white '>
          {country.title}
        </button>
      ))}
    </div>
  );
}

export default NavBar;
