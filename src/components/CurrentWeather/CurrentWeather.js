import React from 'react';
import PropTypes from 'prop-types';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarOutline } from '@fortawesome/free-regular-svg-icons';
import styles from './CurrentWeather.module.scss';
import Card from '../Card';
import IconButton from '../IconButton';
import Temperature from '../Temperature';
import TemperatureRange from '../TemperatureRange';
import Wind from '../Wind';
import WeatherIcon from '../WeatherIcon';
import Status from '../Status';

const CurrentWeather = ({
  locationName,
  temperature,
  feelsLike,
  minTemp,
  maxTemp,
  windSpeed,
  windDegrees,
  weatherConditions,
  weatherIcon,
  isLoading,
  onClick,
  isFavorite,
}) => {
  const iconName = isFavorite ? faStar : faStarOutline;

  const renderLoadingSpinner = () => {
    if (!isLoading) return null;

    const message = `Loading weather forecast for ${locationName}`;
    return (
      <div className={styles.loadingSpinner}>
        <Status type="loading">{message}</Status>
      </div>
    );
  };

  return (
    <div className={styles.currentWeather}>
      <Card>
        <div className={styles.currentWeatherHeader}>
          <h2>
            Current weather in &nbsp;
            {locationName}
          </h2>
          <IconButton
            type="button"
            className={styles.favoriteButton}
            icon={iconName}
            onClick={onClick}
            size="large"
          />
        </div>
        <div className={styles.currentWeatherInfo}>
          <div className={styles.weatherNow}>
            <Temperature temp={temperature} size="large" />
            <div>
              <p>
                feels like &nbsp;
                <Temperature temp={feelsLike} />
              </p>
              <p>{weatherConditions}</p>
            </div>
          </div>
          <div className={styles.forecastSummary}>
            <WeatherIcon icon={weatherIcon} size="large" />
            <div>
              <TemperatureRange min={minTemp} max={maxTemp} />
              <Wind speed={windSpeed} degrees={windDegrees} />
            </div>
          </div>
        </div>
        {renderLoadingSpinner()}
      </Card>
    </div>
  );
};

CurrentWeather.propTypes = {
  locationName: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  feelsLike: PropTypes.number.isRequired,
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
  windDegrees: PropTypes.number.isRequired,
  weatherConditions: PropTypes.string.isRequired,
  weatherIcon: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CurrentWeather;
