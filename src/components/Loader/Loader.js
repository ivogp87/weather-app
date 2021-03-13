import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Loader.module.scss';

const Loader = ({ variant }) => (
  <div className={variant === 'full-page' ? `${styles.loader} ${styles.fullPage}` : styles.loader}>
    <FontAwesomeIcon icon="spinner" size={variant === 'full-page' ? '2x' : 'lg'} spin />
  </div>
);

Loader.propTypes = {
  variant: PropTypes.oneOf(['default', 'full-page']).isRequired,
};

export default Loader;
