import React from 'react';
import PropTypes from 'prop-types';
import styles from './TemperatureCard.module.scss';

const TemperatureCard = ({ temp, size }) => (
  <span className={styles[size]}>
    {Math.round(temp)}
    &nbsp;&deg;C
  </span>
);

TemperatureCard.propTypes = {
  temp: PropTypes.number.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

TemperatureCard.defaultProps = {
  size: 'small',
};

export default TemperatureCard;
