import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveLocation, removeLocation } from '../../actions';
import Status from '../Status';
import CurrentWeather from '../CurrentWeather';

const CurrentWeatherContainer = () => {
  const selectedLocation = useSelector((state) => state.selectedLocation);
  const favoriteLocations = useSelector((state) => state.favoriteLocations);
  const weatherForecast = useSelector((state) => state.weatherForecast);
  const dispatch = useDispatch();

  const { status: forecastStatus, data: forecastData, error: forecastError } = weatherForecast;
  const noWeatherData = Object.keys(forecastData).length === 0;
  const isIdle = forecastStatus === 'idle';
  const isLoading = forecastStatus === 'loading';
  const isError = forecastStatus === 'error';

  if (isIdle && noWeatherData) return null;
  if (isLoading && noWeatherData) return <Status type="loading">Loading weather forecast</Status>;
  if (isError) return <Status type="error">{forecastError}</Status>;

  const { fullLocationName: selectedLocationName } = selectedLocation;

  const isFavoriteLocation = favoriteLocations.some(
    (location) => location.fullLocationName === selectedLocationName
  );

  const handleSaveRemoveLocation = () => {
    if (isFavoriteLocation) {
      dispatch(removeLocation(selectedLocation));
    } else {
      dispatch(saveLocation(selectedLocation));
    }
  };

  const {
    temp,
    feels_like: feelsLike,
    wind_speed: windSpeed,
    wind_deg: windDegrees,
    weather,
  } = forecastData.current;
  const { description, icon } = weather[0];

  return (
    <CurrentWeather
      locationName={selectedLocationName}
      temperature={temp}
      feelsLike={feelsLike}
      windSpeed={windSpeed}
      windDegrees={windDegrees}
      description={description}
      weatherIcon={icon}
      isLoading={isLoading}
      isFavorite={isFavoriteLocation}
      onClick={handleSaveRemoveLocation}
    />
  );
};

export default CurrentWeatherContainer;
