import React from 'react';
import PropTypes from 'prop-types';
import styles from './Temperature.module.scss';

const Temperature = ({ temp, size }) => (
  <span className={styles[size]}>
    {Math.round(temp)}
    &nbsp;&deg;C
  </span>
);

Temperature.propTypes = {
  temp: PropTypes.number.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Temperature.defaultProps = {
  size: 'small',
};

export default Temperature;
