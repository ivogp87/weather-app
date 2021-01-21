import React from 'react';
import PropTypes from 'prop-types';
import Temperature from '../Temperature';

const TemperatureRange = ({ min, max, size }) => (
  <p>
    <Temperature temp={min} size={size} />
    &nbsp;/&nbsp;
    <Temperature temp={max} size={size} />
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
