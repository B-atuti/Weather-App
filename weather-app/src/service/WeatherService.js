import { DateTime } from "luxon";

const API_KEY = 'b4bb0f58f9a64179ac1103527221807';
const BASE_URL = "http://api.weatherapi.com/v1/forecast.json?"

const getweatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY })
  
  return fetch(url)
    .then((res) => res.json())
};

const formattedCurrentWeather = (data)  => {
    const {
        coord: { lat,lon },
        main: {temp, feels_like, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed}
    } = data 

    const {main, details, icons} = weather[0]

    return{lat, lon, temp, feels_like, humidity, name, dt, country, sunrise, sunset, details, speed}
};
const formattedForecastWeather = (data) => {
    let { timezone, daily, hourly} =data;
    daily = daily.slice(1,6).map(d => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'ccc'),
            temp: d.temp.day,
            icon: d.weather[0].icon
        };
    });

    hourly = daily.slice(1,6).map(d => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'ccc'),
            temp: d.temp.day,
            icon: d.weather[0].icon
        };
    });
    return  { timezone, daily, hourly };
}
const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getweatherData(
        'weather',
         searchParams
         ).then(formattedCurrentWeather)

         const {lat, lon} = formattedCurrentWeather

         const formattedForecastWeather = await getweatherData('onecall', {
            lat,
            lon, 
            exclude: 'current,minutely,alert', 
            units: searchParams.units
         }).then (formattedForecastWeather)

    return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const formatToLocalTime = (
    secs, 
    zone, 
    format = "cccc, dd lll yyyy' | Local time: 'hh:mm a"
    ) => DateTime .fromSeconds(secs).setZone(zone).toFormat(format);

    const iconUrlFromCode = (code) => ''
export default getFormattedWeatherData;
