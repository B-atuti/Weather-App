// import React from 'react';
// import './App.css';
import './index.css'
import 'tailwindcss/tailwind.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import NavBar from './components/NavBar';
import Search from './components/Search';


const App = () => {
  return (
    <div>
      <h2 className='text-center font-bold'>Weather App</h2>
      <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-blue-300 to to-blue-400 h-fit shadow-xl shadow-gray-500'>
      < NavBar />
      < Search />
      </div>
    </div>
  );
};

export default App;
