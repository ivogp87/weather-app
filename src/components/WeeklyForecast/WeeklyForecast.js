import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import DailyForecast from '../DailyForecast';

const WeeklyForecast = ({ forecastData }) => (
  <Card>
    <h2>Weekly Forecast</h2>
    {forecastData.map(({ dayOfWeek, weatherDescription, weatherIcon, minTemp, maxTemp }) => (
      <DailyForecast
        key={dayOfWeek}
        dayOfWeek={dayOfWeek}
        weatherDescription={weatherDescription}
        weatherIcon={weatherIcon}
        minTemp={minTemp}
        maxTemp={maxTemp}
      />
    ))}
  </Card>
);

WeeklyForecast.propTypes = {
  forecastData: PropTypes.arrayOf(
    PropTypes.shape({
      dayOfWeek: PropTypes.string.isRequired,
      maxTemp: PropTypes.number.isRequired,
      minTemp: PropTypes.number.isRequired,
      weatherDescription: PropTypes.string.isRequired,
      weatherIcon: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default WeeklyForecast;
