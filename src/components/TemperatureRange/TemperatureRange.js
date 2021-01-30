import React from 'react';
import PropTypes from 'prop-types';
import TemperatureCard from '../TemperatureCard';

const TemperatureRange = ({ min, max, size }) => (
  <p>
    <TemperatureCard temp={min} size={size} />
    &nbsp;/&nbsp;
    <TemperatureCard temp={max} size={size} />
  </p>
);

TemperatureRange.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

TemperatureRange.defaultProps = {
  size: 'small',
};

export default TemperatureRange;
