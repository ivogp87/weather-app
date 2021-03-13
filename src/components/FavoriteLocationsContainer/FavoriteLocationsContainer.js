import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherForecast, fetchLocationDetails, restoreSavedLocations } from '../../actions';
import FavoriteLocations from '../FavoriteLocations';

const FavoriteLocationsContainer = () => {
  const dispatch = useDispatch();
  const favoriteLocations = useSelector((state) => state.favoriteLocations);
  const { data: locationDetails } = useSelector((state) => state.locationDetails);

  useEffect(() => {
    // restore favorite locations from localStorage
    const savedLocations = localStorage.getItem('favoriteLocations');
    if (savedLocations) {
      dispatch(restoreSavedLocations(JSON.parse(savedLocations)));
    }
  }, [dispatch]);

  useEffect(() => {
    // Save favorite locations to local storage
    if (favoriteLocations.length) {
      localStorage.setItem('favoriteLocations', JSON.stringify(favoriteLocations));
    }

    if (favoriteLocations.length === 0 && localStorage.getItem('favoriteLocations')) {
      localStorage.removeItem('favoriteLocations');
    }
  }, [favoriteLocations]);

  const handleClick = (latitude, longitude) => {
    dispatch(fetchWeatherForecast(latitude, longitude));
    dispatch(fetchLocationDetails(latitude, longitude));
  };

  const selectedLocationName = locationDetails ? locationDetails[0].locationName : '';

  const favoriteLocationsList = favoriteLocations.map(({ lat, lon, locationName }) => ({
    lat,
    lon,
    locationName,
  }));

  if (favoriteLocations.length === 0) return null;

  return (
    <FavoriteLocations
      locationsList={favoriteLocationsList}
      onClick={handleClick}
      selectedLocationName={selectedLocationName || ''}
    />
  );
};

export default FavoriteLocationsContainer;
