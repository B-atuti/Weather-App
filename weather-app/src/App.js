// import React from 'react';
// import './App.css';
import './index.css'
import 'tailwindcss/tailwind.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import NavBar from './components/NavBar';
import Search from './components/Search';
import WeatherDetails from './components/WeatherDetails';
import LocationInfo from './components/LocationInfo';
import DailyWeather from './components/DailyWeather';


const App = () => {
  return (
    <div>
      <h2 className='text-center font-bold'>Weather App</h2>
      <div className='mx-auto max-w-screen-md mt-7 py-5 px-32 bg-gradient-to-br from-blue-300 to to-blue-400 h-fit shadow-xl shadow-gray-500 '>
      < NavBar />
      < Search />
      </div>

      < LocationInfo />

      <WeatherDetails />
      <DailyWeather title='daily forecast' />
    </div>
  );
};

export default App;
