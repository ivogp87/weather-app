import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import styles from './Wind.module.scss';

const Wind = ({ speed, degrees }) => (
  <p>
    <FontAwesomeIcon
      className={styles.windDirection}
      icon={faArrowDown}
      transform={{ rotate: degrees }}
    />
    {speed.toFixed(1)}
    &nbsp;m/s
  </p>
);

Wind.propTypes = {
  speed: PropTypes.number.isRequired,
  degrees: PropTypes.number.isRequired,
};

export default Wind;
