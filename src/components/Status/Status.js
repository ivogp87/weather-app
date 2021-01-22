import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Status.module.scss';

const Status = ({ type, children }) => {
  const isLoading = type === 'loading';
  const className = isLoading ? styles.loading : styles.error;
  const icon = isLoading ? 'spinner' : 'exclamation-triangle';

  return (
    <p className={className}>
      <FontAwesomeIcon className={styles.icon} icon={icon} size="lg" spin={isLoading} />
      {children}
    </p>
  );
};

Status.propTypes = {
  type: PropTypes.oneOf(['loading', 'error']).isRequired,
  children: PropTypes.string.isRequired,
};

export default Status;
