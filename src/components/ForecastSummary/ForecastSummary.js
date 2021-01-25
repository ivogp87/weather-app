import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import ForecastItem from '../ForecastItem';

const ForecastSummary = ({ title, forecast }) => (
  <Card>
    <h2>{title}</h2>
    <ul>
      {forecast.map(
        ({ date, weatherConditions, weatherIcon, temperature, minTemp, maxTemp, onClick }) => (
          <ForecastItem
            key={date}
            date={date}
            weatherConditions={weatherConditions}
            weatherIcon={weatherIcon}
            temperature={temperature}
            minTemp={minTemp}
            maxTemp={maxTemp}
            onClick={onClick}
          />
        )
      )}
    </ul>
  </Card>
);

ForecastSummary.propTypes = {
  title: PropTypes.string.isRequired,
  forecast: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ForecastSummary;
