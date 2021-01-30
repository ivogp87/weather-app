import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './IconButton.module.scss';

const IconButton = ({ type, icon, color, size, className, title, onClick }) => {
  const classNames = `${styles.iconButton} ${styles[color]} ${styles[size]}${
    className && ` ${className}`
  }`;

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={classNames}
      title={title}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

IconButton.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']).isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  color: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  color: 'primary',
  size: 'medium',
  className: '',
  title: '',
  onClick: () => null,
};

export default IconButton;
