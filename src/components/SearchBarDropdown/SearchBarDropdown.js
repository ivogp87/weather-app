import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SearchBarDropdown.module.scss';

const SearchBarDropdown = ({ locationsList, onClick }) => {
  if (locationsList.length < 2) return null;

  return (
    <ul className={styles.searchBarDropdown}>
      {locationsList.map((location) => {
        const { fullLocationName } = location;
        return (
          <li role="presentation" key={fullLocationName} onClick={() => onClick(location)}>
            <FontAwesomeIcon icon="search" className={styles.icon} />
            {fullLocationName}
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
