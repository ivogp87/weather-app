import React from 'react';
import styles from './App.module.scss';
import '../../utils/iconLibrary';
import Header from '../Header';
import SearchContainer from '../SearchContainer';
import FavoriteLocationsContainer from '../FavoriteLocationsContainer';
import WeatherContainer from '../WeatherContainer';

const App = () => (
  <div className={styles.container}>
    <Header />
    <SearchContainer />
    <FavoriteLocationsContainer />
    <WeatherContainer />
  </div>
);

export default App;
