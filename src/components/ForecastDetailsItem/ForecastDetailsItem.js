import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ForecastDetailsItem.module.scss';

const ForecastDetailsItem = ({ name, value }) => {
  const icon = {
    temperature: 'thermometer-half',
    pressure: 'compress-alt',
    humidity: 'tint',
    wind: 'wind',
    clouds: 'cloud',
    visibility: 'eye',
  };

  const unit = {
    temperature: ' \u00B0C',
    pressure: 'hPa',
    humidity: '%',
    wind: 'm/s',
    clouds: '%',
    visibility: 'm',
  };

  return (
    <li className={styles.forecastDetailsItem}>
      <FontAwesomeIcon icon={icon[name]} className={styles.icon} />
      <span className={styles.itemName}>{name}</span>
      {Math.round(value)}
      &nbsp;
      {unit[name]}
    </li>
  );
};

ForecastDetailsItem.propTypes = {
  name: PropTypes.oneOf(['temperature', 'pressure', 'humidity', 'wind', 'clouds', 'visibility'])
    .isRequired,
  value: PropTypes.number.isRequired,
};

export default ForecastDetailsItem;
