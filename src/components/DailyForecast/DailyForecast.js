import React from 'react';
import PropTypes from 'prop-types';
import styles from './DailyForecast.module.scss';
import WeatherIcon from '../WeatherIcon';
import TemperatureRange from '../TemperatureRange';

const DailyForecast = ({ dayOfWeek, weatherDescription, weatherIcon, minTemp, maxTemp }) => (
  <div className={styles.dailyForecast}>
    <WeatherIcon icon={weatherIcon} size="medium" />
    <div className={styles.itemsCenter}>
      <p>
        <strong>{dayOfWeek}</strong>
      </p>
      <p>{weatherDescription}</p>
    </div>
    <TemperatureRange min={minTemp} max={maxTemp} />
  </div>
);

DailyForecast.propTypes = {
  dayOfWeek: PropTypes.string.isRequired,
  weatherDescription: PropTypes.string.isRequired,
  weatherIcon: PropTypes.string.isRequired,
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
};

export default DailyForecast;
