// import React from 'react';
// import './App.css';
import './index.css'
import 'tailwindcss/tailwind.css';
import NavBar from './components/NavBar';


const App = () => {
  return (
    <div>
      <h2 className='text-center font-bold'>Weather App</h2>
      <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-blue-700 to to-blue-900 h-fit shadow-xl shadow-gray-500'>
      < NavBar />
      </div>
    </div>
  );
};

export default App;
