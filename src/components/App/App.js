import React from 'react';
import styles from './App.module.scss';
import SearchBar from '../SearchBar';
import WeatherData from '../WeatherData';

const App = () => (
  <div className={styles.container}>
    <SearchBar />
    <WeatherData />
  </div>
);

export default App;
