import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;

const openWeatherMap = axios.create({
  baseURL: 'https://api.openweathermap.org',
  params: {
    appid: API_KEY,
  },
});

export default openWeatherMap;
