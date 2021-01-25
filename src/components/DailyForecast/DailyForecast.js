import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import ForecastItem from '../ForecastItem';

const DailyForecast = ({ forecast }) => (
  <Card>
    <h2>Daily Forecast</h2>
    <ul>
      {forecast.map(({ date, weatherConditions, weatherIcon, minTemp, maxTemp, onClick }) => (
        <ForecastItem
          key={date}
          date={date}
          weatherConditions={weatherConditions}
          weatherIcon={weatherIcon}
          minTemp={minTemp}
          maxTemp={maxTemp}
          onClick={onClick}
        />
      ))}
    </ul>
  </Card>
);

DailyForecast.propTypes = {
  forecast: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DailyForecast;
