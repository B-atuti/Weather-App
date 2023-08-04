import React from 'react';
import 'tailwindcss/tailwind.css';

function NavBar() {
  const cities = [
    {
      id: 1,
      title: 'Brasilia',
    },
    {
      id: 2,
      title: 'Moscow',
    },
    {
      id: 3,
      title: 'Mumbai',
    },
    {
      id: 4,
      title: 'Beijing',
    },
    {
      id: 5,
      title: 'Cape Town',
    },
  ];

  return (
    <div className='flex flex-row items-center justify-around mx-1'>
      {cities.map((city) => (
        <button key={city.id} className='text-black text-lg font-medium border-x-8 border-transparent hover:text-white '>
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default NavBar;
