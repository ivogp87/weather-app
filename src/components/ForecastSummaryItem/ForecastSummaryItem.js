import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ForecastSummaryItem.module.scss';
import WeatherIcon from '../WeatherIcon';
import Temperature from '../Temperature';
import TemperatureRange from '../TemperatureRange';

const ForecastSummaryItem = ({
  date,
  weatherConditions,
  weatherIcon,
  temperature,
  minTemp,
  maxTemp,
  onClick,
}) => (
  <li
    className={styles.summaryItem}
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
      {temperature && <Temperature temp={temperature} />}
      {minTemp && maxTemp && <TemperatureRange min={minTemp} max={maxTemp} />}
      <FontAwesomeIcon className={styles.icon} icon="chevron-down" size="lg" />
    </div>
  </li>
);

ForecastSummaryItem.propTypes = {
  date: PropTypes.string.isRequired,
  weatherConditions: PropTypes.string.isRequired,
  weatherIcon: PropTypes.string.isRequired,
  temperature: PropTypes.number,
  minTemp: PropTypes.number,
  maxTemp: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

ForecastSummaryItem.defaultProps = {
  temperature: null,
  minTemp: null,
  maxTemp: null,
};

export default ForecastSummaryItem;
