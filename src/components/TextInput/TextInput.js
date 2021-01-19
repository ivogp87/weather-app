import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextInput.module.scss';

const TextInput = ({ value, placeholder, onChange, onBlur }) => (
  <input
    type="text"
    className={styles.textInput}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    onBlur={onBlur}
  />
);

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default TextInput;
