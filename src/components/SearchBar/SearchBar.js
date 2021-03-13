import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.scss';
import IconButton from '../IconButton';
import SearchBarDropdown from '../SearchBarDropdown';
import ErrorMessage from '../ErrorMessage';

const SearchBar = ({
  searchTerm,
  onChange,
  onSubmit,
  showDropdown,
  onDropdownClick,
  locationsList,
  searchError,
}) => (
  <header className={styles.searchBar}>
    <div className={styles.searchFormContainer}>
      <form onSubmit={onSubmit} className={styles.searchForm}>
        <input
          type="text"
          className={styles.textInput}
          value={searchTerm}
          placeholder="Enter location name, e.g. Sofia"
          onChange={onChange}
          required
        />
        <IconButton type="submit" icon="search" color="primary" className={styles.submitButton} />
      </form>
      {showDropdown && (
        <SearchBarDropdown locationsList={locationsList} onClick={onDropdownClick} />
      )}
    </div>
    <div className={styles.errorMessageContainer}>
      {searchError && <ErrorMessage>{searchError}</ErrorMessage>}
    </div>
  </header>
);

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  showDropdown: PropTypes.bool.isRequired,
  onDropdownClick: PropTypes.func.isRequired,
  searchError: PropTypes.string,
  locationsList: PropTypes.arrayOf(
    PropTypes.shape({
      locationName: PropTypes.string.isRequired,
      lat: PropTypes.number.isRequired,
      lon: PropTypes.number.isRequired,
    })
  ).isRequired,
};

SearchBar.defaultProps = {
  searchError: '',
};

export default SearchBar;
