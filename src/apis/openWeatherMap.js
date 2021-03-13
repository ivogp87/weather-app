import axios from 'axios';

import removeDuplicateLocations from '../utils/removeDuplicateLocations';

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;

const openWeatherMap = axios.create({
  baseURL: 'https://api.openweathermap.org',
  params: {
    appid: API_KEY,
  },
});

openWeatherMap.interceptors.response.use((response) => {
  if (response.config.url.includes('/geo/')) {
    const uniqueLocations = removeDuplicateLocations(response.data);
    return { ...response, data: uniqueLocations };
  }
  return response;
});

export const getLocationName = (latitude, longitude) =>
  openWeatherMap.get(`/geo/1.0/reverse?lat=${latitude}&lon=${longitude}`);

export const getLocationsByName = (locationName) =>
  openWeatherMap.get(`/geo/1.0/direct?q=${locationName}&limit=10`);

export const getWeatherForecast = (latitude, longitude) =>
  openWeatherMap.get(
    `/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely`
  );

export default openWeatherMap;
