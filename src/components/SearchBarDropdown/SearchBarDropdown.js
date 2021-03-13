import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SearchBarDropdown.module.scss';

const SearchBarDropdown = ({ locationsList, onClick }) => (
  <ul className={styles.searchBarDropdown}>
    {locationsList.map(({ locationName, lat, lon }) => (
      <li role="presentation" key={locationName} onClick={() => onClick(lat, lon)}>
        <FontAwesomeIcon icon="search" className={styles.icon} />
        {locationName}
      </li>
    ))}
  </ul>
);

SearchBarDropdown.propTypes = {
  locationsList: PropTypes.arrayOf(
    PropTypes.shape({
      locationName: PropTypes.string.isRequired,
      lat: PropTypes.number.isRequired,
      lon: PropTypes.number.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SearchBarDropdown;
