import React from 'react';
import PropTypes from 'prop-types';
import styles from './WeatherIcon.module.scss';

// The icon names are provided by the API (01d, 03n)... File names are reversed because variables can't start with number
import d01 from '../../images/d01.png';
import d02 from '../../images/d02.png';
import d03 from '../../images/d03.png';
import d04 from '../../images/d04.png';
import d09 from '../../images/d09.png';
import d10 from '../../images/d10.png';
import d11 from '../../images/d11.png';
import d13 from '../../images/d13.png';
import d50 from '../../images/d50.png';
import n01 from '../../images/n01.png';
import n02 from '../../images/n02.png';
import n10 from '../../images/n10.png';

// Map icon names to icon files
const icons = {
  '01d': d01,
  '02d': d02,
  '03d': d03,
  '04d': d04,
  '09d': d09,
  '10d': d10,
  '11d': d11,
  '13d': d13,
  '50d': d50,
  '01n': n01,
  '02n': n02,
  '03n': d03,
  '04n': d04,
  '09n': d09,
  '10n': n10,
  '11n': d11,
  '13n': d13,
  '50n': d50,
};

const WeatherIcon = ({ icon, size }) => (
  <img className={styles[size]} src={icons[icon]} alt="icon" />
);

WeatherIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

WeatherIcon.defaultProps = {
  size: 'small',
};

export default WeatherIcon;
