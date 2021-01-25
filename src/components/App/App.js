import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './App.module.scss';
import '../../iconLibrary';
import {
  getCurrentLocation,
  selectLocation,
  fetchWeatherForecast,
  restoreSavedLocations,
} from '../../actions';
import SearchBar from '../SearchBar';
import FavoriteLocations from '../FavoriteLocations';
import WeatherData from '../WeatherData';

const App = () => {
  const dispatch = useDispatch();
  const { latitude, longitude } = useSelector((state) => state.selectedLocation);
  const currentLocation = useSelector((state) => state.currentLocation.data);
  const favoriteLocations = useSelector((state) => state.favoriteLocations);

  useEffect(() => {
    dispatch(getCurrentLocation());

    const savedLocations = localStorage.getItem('favoriteLocations');
    if (savedLocations) {
      const locationsArray = JSON.parse(savedLocations);
      dispatch(restoreSavedLocations(locationsArray));
    }
  }, [dispatch]);

  useEffect(() => {
    if (Object.keys(currentLocation).length > 0) {
      dispatch(selectLocation(currentLocation));
    }
  }, [currentLocation, dispatch]);

  useEffect(() => {
    if (latitude && longitude) {
      dispatch(fetchWeatherForecast(latitude, longitude));
    }
  }, [latitude, longitude, dispatch]);

  useEffect(() => {
    const locations = JSON.stringify(favoriteLocations);
    localStorage.setItem('favoriteLocations', locations);
  }, [favoriteLocations]);

  return (
    <div className={styles.container}>
      <SearchBar />
      <FavoriteLocations />
      <WeatherData />
    </div>
  );
};

export default App;
