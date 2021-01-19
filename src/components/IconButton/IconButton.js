import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './IconButton.module.scss';

const IconButton = ({ type, icon, color, size, className, onClick }) => {
  const classNames = `${styles.iconButton} ${styles[color]} ${styles[size]}${
    className && ` ${className}`
  }`;

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={classNames}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

IconButton.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']).isRequired,
  icon: PropTypes.shape({}).isRequired,
  color: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  color: 'primary',
  size: 'medium',
  className: '',
  onClick: () => null,
};

export default IconButton;
