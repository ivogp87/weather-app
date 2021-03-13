import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeatherForecast, getLocationDetails, getLocationsList } from '../../actions';
import formatLocationName from '../../utils/formatLocationName';
import SearchBar from '../SearchBar';

const SearchContainer = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const { status, data: locationsList } = useSelector((state) => state.locationsList);

  useEffect(() => {
    const getForecastForCurrentLocation = (geolocationPosition) => {
      const { latitude, longitude } = geolocationPosition.coords;
      dispatch(getWeatherForecast(latitude, longitude));
      dispatch(getLocationDetails(latitude, longitude));
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getForecastForCurrentLocation);
    }
  }, [dispatch]);

  // Searching for location by name may return more than one result
  // If there's one result - fetch the forecast
  // else show dropdown so the user can select a location
  useEffect(() => {
    if (locationsList && locationsList.length === 1) {
      const { lat, lon } = locationsList[0];
      dispatch(getWeatherForecast(lat, lon));
      dispatch(getLocationDetails(lat, lon));
    }

    if (locationsList && locationsList.length > 1) {
      setShowDropdown(true);
    }
  }, [locationsList]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(getLocationsList(encodeURIComponent(searchTerm)));
  };

  const handleDropdownClick = (lat, lon) => {
    setShowDropdown(false);
    dispatch(getWeatherForecast(lat, lon));
    dispatch(getLocationDetails(lat, lon));
  };

  const locations = locationsList
    ? locationsList.map(({ lat, lon, name, country, state }) => ({
        lat,
        lon,
        locationName: formatLocationName(name, country, state),
      }))
    : [];

  const locationNotFound =
    locationsList && locationsList.length === 0
      ? 'Location not found. Please check your spelling and try again'
      : false;

  const searchError = status === 'error' ? 'Something went wrong, please try again.' : false;

  return (
    <SearchBar
      searchTerm={searchTerm}
      onChange={handleInputChange}
      onSubmit={handleSearchSubmit}
      showDropdown={showDropdown}
      onDropdownClick={handleDropdownClick}
      locationsList={locations}
      isLoading={status === 'loading'}
      searchError={locationNotFound || searchError || ''}
    />
  );
};

export default SearchContainer;
