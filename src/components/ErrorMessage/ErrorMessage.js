import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorMessage.module.scss';

const ErrorMessage = ({ children }) => <p className={styles.error}>{children}</p>;

ErrorMessage.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ErrorMessage;
