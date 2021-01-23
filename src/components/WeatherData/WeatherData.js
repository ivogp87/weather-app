import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherForecast, saveLocation, removeLocation } from '../../actions';
import Status from '../Status';
import CurrentWeather from '../CurrentWeather';

const WeatherData = () => {
  const selectedLocation = useSelector((state) => state.selectedLocation);
  const favoriteLocations = useSelector((state) => state.favoriteLocations);
  const weatherForecast = useSelector((state) => state.weatherForecast);
  const dispatch = useDispatch();

  const { fullLocationName, latitude, longitude } = selectedLocation;

  useEffect(() => {
    if (latitude && longitude) {
      dispatch(fetchWeatherForecast(latitude, longitude));
    }
  }, [latitude, longitude]);

  const { status: forecastStatus, data: forecastData, error: forecastError } = weatherForecast;
  const noWeatherData = Object.keys(forecastData).length === 0;
  const isIdle = forecastStatus === 'idle';
  const isLoading = forecastStatus === 'loading';
  const isError = forecastStatus === 'error';

  const isFavoriteLocation = favoriteLocations.some(
    (location) => location.fullLocationName === fullLocationName // fullLocationName is destructured from selectedLocation
  );

  const handleSaveRemoveLocation = () => {
    if (isFavoriteLocation) {
      dispatch(removeLocation(selectedLocation));
    } else {
      dispatch(saveLocation(selectedLocation));
    }
  };

  if (noWeatherData && isIdle) return null;

  if (isLoading && noWeatherData) return <Status type="loading">Loading weather forecast</Status>;

  if (isError) return <Status type="error">{forecastError}</Status>;

  const {
    temp: temperature,
    feels_like: feelsLike,
    wind_speed: windSpeed,
    wind_deg: windDegrees,
    weather,
  } = forecastData.current;

  const { description: weatherConditions, icon: weatherIcon } = weather[0];
  const { min: minTemp, max: maxTemp } = forecastData.daily[0].temp;

  return (
    <CurrentWeather
      locationName={fullLocationName}
      temperature={temperature}
      feelsLike={feelsLike}
      minTemp={minTemp}
      maxTemp={maxTemp}
      windSpeed={windSpeed}
      windDegrees={windDegrees}
      weatherConditions={weatherConditions}
      weatherIcon={weatherIcon}
      isLoading={isLoading}
      onClick={handleSaveRemoveLocation}
      isFavorite={isFavoriteLocation}
    />
  );
};

export default WeatherData;
