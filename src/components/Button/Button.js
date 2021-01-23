import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Button.module.scss';

const Button = ({ children, icon, color, size, className, disabled, onClick }) => {
  const classNames = `${styles[color]} ${styles[size]} ${
    disabled ? styles.disabledButton : ''
  } ${className}`;

  return (
    <button type="button" onClick={onClick} className={classNames} disabled={disabled}>
      {icon && <FontAwesomeIcon className={styles.buttonIcon} icon={icon} />}
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  color: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  icon: '',
  color: 'primary',
  size: 'medium',
  className: '',
  disabled: false,
};

export default Button;
