import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import NavBar from './components/NavBar';
import WeatherDetails from './components/WeatherDetails';
import DailyWeather from './components/DailyWeather';
import WeeklyWeather from './components/WeeklyWeather';
import SearchBar from './components/SearchBar';
import LocationInfo from './components/LocationInfo';

function App() {
  return (
    <div>
      <NavBar />
      <SearchBar />
      <LocationInfo />
      <Routes>
        <Route exact path="/" component={WeatherDetails} />
        <Route path="/daily" component={DailyWeather} />
        <Route path="/weekly" component={WeeklyWeather} />
      </Routes>
    </div>
  );
}

export default App;
