import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './CurrentWeather.module.scss';
import Card from '../Card';
import IconButton from '../IconButton';
import TemperatureCard from '../TemperatureCard';
import WeatherIcon from '../WeatherIcon';

const CurrentWeather = ({
  locationName,
  temperature,
  feelsLike,
  description,
  weatherIcon,
  isFavoriteLocation,
  onFavoriteClick,
}) => {
  const iconName = isFavoriteLocation ? 'star' : ['far', 'star'];
  const buttonTitle = isFavoriteLocation ? 'Remove from your locations' : 'Add to your locations';

  return (
    <div className={styles.currentWeather}>
      <Card>
        <div className={styles.currentWeatherHeader}>
          <h2>Current Weather</h2>
          <IconButton
            type="button"
            title={buttonTitle}
            className={styles.favoriteButton}
            icon={iconName}
            onClick={() => onFavoriteClick(locationName)}
            size="large"
          />
        </div>
        <p>
          <FontAwesomeIcon icon="map-marker-alt" className={styles.locationIcon} />
          {locationName}
        </p>
        <div className={styles.currentWeatherInfo}>
          <div className={styles.flexColumn}>
            <TemperatureCard temp={temperature} size="large" />
            <p>
              feels like &nbsp;
              <TemperatureCard temp={feelsLike} />
            </p>
          </div>
          <div className={styles.flexColumn}>
            <WeatherIcon icon={weatherIcon} size="large" />
            <p>{description}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

CurrentWeather.propTypes = {
  locationName: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  feelsLike: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  weatherIcon: PropTypes.string.isRequired,
  isFavoriteLocation: PropTypes.bool.isRequired,
  onFavoriteClick: PropTypes.func.isRequired,
};

export default CurrentWeather;
