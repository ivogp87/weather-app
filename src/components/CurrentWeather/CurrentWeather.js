import React from 'react';
import PropTypes from 'prop-types';
import styles from './CurrentWeather.module.scss';
import Card from '../Card';
import IconButton from '../IconButton';
import TemperatureCard from '../TemperatureCard';
import WeatherIcon from '../WeatherIcon';
import Status from '../Status';

const CurrentWeather = ({
  locationName,
  temperature,
  feelsLike,
  description,
  weatherIcon,
  isLoading,
  onClick,
  isFavorite,
}) => {
  const iconName = isFavorite ? 'star' : ['far', 'star'];
  const buttonTitle = isFavorite ? 'Remove from your locations' : 'Add to your locations';

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
            Current Weather Conditions In&nbsp;
            {locationName}
          </h2>
          <IconButton
            type="button"
            title={buttonTitle}
            className={styles.favoriteButton}
            icon={iconName}
            onClick={onClick}
            size="large"
          />
        </div>
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
        {renderLoadingSpinner()}
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
  isLoading: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CurrentWeather;
