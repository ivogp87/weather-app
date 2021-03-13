import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavoriteLocations } from '../../actions';
import formatLocationName from '../../utils/formatLocationName';

import CurrentWeather from '../CurrentWeather';
import WeeklyForecast from '../WeeklyForecast';
import Loader from '../Loader';
import ErrorMessage from '../ErrorMessage';

const WeatherContainer = () => {
  const dispatch = useDispatch();

  const { status, data: weatherForecast } = useSelector((state) => state.weatherForecast);

  const locationDetails = useSelector((state) => state.locationDetails.data);

  const favoriteLocations = useSelector((state) => state.favoriteLocations);

  const handleToggleFavoriteLocation = (locationName) => {
    const { lat, lon } = weatherForecast;
    dispatch(toggleFavoriteLocations(locationName, lat, lon));
  };

  if (status === 'error')
    return <ErrorMessage>Something went wrong, please try again</ErrorMessage>;

  if (!weatherForecast && status === 'loading') return <Loader variant="default" />;

  if (!weatherForecast) return null;

  const getLocationName = () => {
    if (locationDetails) {
      const { name, country, state } = locationDetails[0];
      return formatLocationName(name, country, state);
    }

    return '';
  };

  const locationName = getLocationName();
  const isFavoriteLocation = favoriteLocations.some(
    (location) => location.locationName === locationName
  );

  const weeklyForecastData = weatherForecast.daily.map((day) => {
    const { dt: unixTimestamp, weather, temp } = day;
    const { description, icon } = weather[0];
    const date = new Date(unixTimestamp * 1000);
    const dateToday = new Date().getDate();
    const dayOfWeek =
      dateToday === date.getDate()
        ? 'Today'
        : date.toLocaleDateString('en-US', { weekday: 'long' });

    return {
      dayOfWeek,
      weatherDescription: description,
      weatherIcon: icon,
      minTemp: temp.min,
      maxTemp: temp.max,
    };
  });
  return (
    <>
      {status === 'loading' && <Loader variant="full-page" />}
      <CurrentWeather
        locationName={locationName}
        onFavoriteClick={handleToggleFavoriteLocation}
        isFavoriteLocation={isFavoriteLocation}
        temperature={weatherForecast.current.temp}
        feelsLike={weatherForecast.current.feels_like}
        description={weatherForecast.current.weather[0].description}
        weatherIcon={weatherForecast.current.weather[0].icon}
      />
      <WeeklyForecast forecastData={weeklyForecastData} />
    </>
  );
};

export default WeatherContainer;
