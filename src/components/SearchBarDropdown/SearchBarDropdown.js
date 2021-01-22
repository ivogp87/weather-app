import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SearchBarDropdown.module.scss';

const SearchBarDropdown = ({ locationsList, onClick }) => {
  if (locationsList.length < 2) return null;

  return (
    <ul className={styles.searchBarDropdown}>
      {locationsList.map((location) => {
        const { locationName, state, country } = location;
        const name = state
          ? `${locationName}, ${country} (${state})`
          : `${locationName}, ${country}`;
        return (
          <li role="presentation" key={name} onClick={() => onClick(location)}>
            <FontAwesomeIcon icon="search" className={styles.icon} />
            {name}
          </li>
        );
      })}
    </ul>
  );
};

SearchBarDropdown.propTypes = {
  locationsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SearchBarDropdown;
