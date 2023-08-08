import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import NavBar from './components/NavBar';
import WeatherDetails from './components/WeatherDetails';
import DailyWeather from './components/DailyWeather';
import WeeklyWeather from './components/WeeklyWeather';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" component={WeatherDetails} />
        <Route path="/daily" component={DailyWeather} />
        <Route path="/weekly" component={WeeklyWeather} />
      </Routes>
    </div>
  );
}

export default App;
