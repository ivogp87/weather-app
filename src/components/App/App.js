import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './App.module.scss';
import '../../iconLibrary';
import { getCurrentLocation, selectLocation } from '../../actions';
import SearchBar from '../SearchBar';
import FavoriteLocations from '../FavoriteLocations';
import WeatherData from '../WeatherData';

const App = () => {
  const dispatch = useDispatch();
  const currentLocation = useSelector((state) => state.currentLocation.data);

  // Get the current user location on initial render
  useEffect(() => {
    dispatch(getCurrentLocation());
  }, []);

  // Set the current location as selected if available (initialized to empty object)
  useEffect(() => {
    if (Object.keys(currentLocation).length > 0) {
      dispatch(selectLocation(currentLocation));
    }
  }, [currentLocation]);

  return (
    <div className={styles.container}>
      <SearchBar />
      <FavoriteLocations />
      <WeatherData />
    </div>
  );
};

export default App;
