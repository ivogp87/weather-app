import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './SearchBar.module.scss';
import { selectLocation, fetchLocationsList } from '../../actions';
import TextInput from '../TextInput';
import IconButton from '../IconButton';
import Status from '../Status';
import SearchBarDropdown from '../SearchBarDropdown';

const SearchBar = () => {
  const [locationName, setLocationName] = useState('');
  const [touched, setTouched] = useState(false);
  const [formError, setFormError] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const dispatch = useDispatch();
  const { status: locationsStatus, data: locationsList, error: locationsError } = useSelector(
    (state) => state.locationsList
  );

  const handleSelectLocation = (location) => {
    setShowDropdown(false);
    dispatch(selectLocation(location));
  };

  useEffect(() => {
    if (locationsList.length === 1) {
      handleSelectLocation(locationsList[0]);
    } else {
      setShowDropdown(true);
    }
  }, [locationsList]);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const closeDropdown = () => setShowDropdown(false);
    if (showDropdown) {
      document.addEventListener('click', closeDropdown);
      return () => document.removeEventListener('click', closeDropdown);
    }
  }, [showDropdown]);

  useEffect(() => {
    const validate = () => {
      if (!locationName) {
        setFormError('You must enter a location name.');
      } else {
        setFormError('');
      }
    };

    validate();
  }, [locationName]);

  const handleChange = (e) => setLocationName(e.target.value);
  const handleBlur = () => setTouched(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formError && touched) {
      dispatch(fetchLocationsList(locationName));
    } else {
      setTouched(true);
    }
  };

  return (
    <header className={styles.searchBar}>
      <h1>What Is The Weather In</h1>
      <div className={styles.searchFormContainer}>
        <form onSubmit={handleSubmit} className={styles.searchForm}>
          <TextInput
            value={locationName}
            placeholder="Enter location name, e.g. Sofia"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <IconButton type="submit" icon="search" color="primary" className={styles.submitButton} />
        </form>
        {showDropdown && (
          <SearchBarDropdown locationsList={locationsList} onClick={handleSelectLocation} />
        )}
      </div>
      <div className={styles.statusMessages}>
        {touched && formError && <Status type="error">{formError}</Status>}
        {locationsStatus === 'error' && <Status type="error">{locationsError}</Status>}
        {locationsStatus === 'loading' && <Status type="loading">Loading...</Status>}
      </div>
    </header>
  );
};

export default SearchBar;
