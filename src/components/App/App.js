import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './App.module.scss';
import '../../utils/iconLibrary';
import {
  getCurrentLocation,
  selectLocation,
  fetchWeatherForecast,
  restoreSavedLocations,
} from '../../actions';
import SearchBar from '../SearchBar';
import FavoriteLocations from '../FavoriteLocations';
import CurrentWeatherContainer from '../CurrentWeatherContainer';
import WeeklyForecast from '../WeeklyForecast';

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
    if (favoriteLocations.length > 0) {
      const locations = JSON.stringify(favoriteLocations);
      localStorage.setItem('favoriteLocations', locations);
    } else {
      localStorage.removeItem('favoriteLocations');
    }
  }, [favoriteLocations]);

  return (
    <div className={styles.container}>
      <SearchBar />
      <FavoriteLocations />
      <CurrentWeatherContainer />
      <WeeklyForecast />
    </div>
  );
};

export default App;
