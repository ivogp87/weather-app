import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ForecastItem.module.scss';
import WeatherIcon from '../WeatherIcon';
import TemperatureRange from '../TemperatureRange';

const ForecastItem = ({ date, weatherConditions, weatherIcon, minTemp, maxTemp, onClick }) => (
  <li
    className={styles.forecastItem}
    role="presentation"
    title="Click to see more details"
    onClick={onClick}
  >
    <div className={styles.itemsLeft}>
      <WeatherIcon icon={weatherIcon} size="medium" />
      <span>
        <p>{date}</p>
        <p>{weatherConditions}</p>
      </span>
    </div>
    <div className={styles.itemsRight}>
      <TemperatureRange min={minTemp} max={maxTemp} />
      <FontAwesomeIcon className={styles.icon} icon="chevron-down" size="lg" />
    </div>
  </li>
);

ForecastItem.propTypes = {
  date: PropTypes.string.isRequired,
  weatherConditions: PropTypes.string.isRequired,
  weatherIcon: PropTypes.string.isRequired,
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ForecastItem;
