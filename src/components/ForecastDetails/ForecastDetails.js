import React from 'react';
import PropTypes from 'prop-types';
import ForecastDetailsItem from '../ForecastDetailsItem';

const ForecastDetails = ({ temperature, pressure, humidity, wind, clouds, visibility }) => (
  <ul>
    <ForecastDetailsItem name="temperature" value={temperature} />
    <ForecastDetailsItem name="humidity" value={humidity} />
    <ForecastDetailsItem name="clouds" value={clouds} />
    <ForecastDetailsItem name="wind" value={wind} />
    <ForecastDetailsItem name="visibility" value={visibility} />
    <ForecastDetailsItem name="pressure" value={pressure} />
  </ul>
);

ForecastDetails.propTypes = {
  pressure: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
  clouds: PropTypes.number.isRequired,
  visibility: PropTypes.number.isRequired,
};

export default ForecastDetails;
