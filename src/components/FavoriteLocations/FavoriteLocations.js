import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './FavoriteLocations.module.scss';
import Card from '../Card';
import IconButton from '../IconButton';
import Button from '../Button';

const FavoriteLocations = ({ locationsList, selectedLocationName, onClick }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  // Close the mobile menu on click outside
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (showMobileMenu) {
      const closeMenu = () => {
        setShowMobileMenu(false);
      };

      document.addEventListener('click', closeMenu);
      return () => document.removeEventListener('click', closeMenu);
    }
  }, [showMobileMenu]);

  const menuClass = showMobileMenu
    ? `${styles.locationsMenu} ${styles.locationsMenuActive}`
    : styles.locationsMenu;

  return (
    <Card>
      <header className={styles.locationsHeader}>
        <h2>Your Locations</h2>
        <IconButton
          type="button"
          className={styles.menuIcon}
          onClick={() => setShowMobileMenu((currentState) => !currentState)}
          icon={showMobileMenu ? 'times' : 'bars'}
        />
      </header>
      <ul className={menuClass}>
        {locationsList.map((location) => {
          const { locationName, lat, lon } = location;
          const isSelectedLocation = locationName === selectedLocationName;

          return (
            <li key={locationName}>
              <Button
                onClick={() => onClick(lat, lon)}
                color={isSelectedLocation ? 'primary' : 'secondary'}
                className={showMobileMenu ? styles.mobileButton : ''}
                disabled={isSelectedLocation}
              >
                {locationName}
              </Button>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

FavoriteLocations.propTypes = {
  locationsList: PropTypes.arrayOf(
    PropTypes.shape({
      locationName: PropTypes.string.isRequired,
      lat: PropTypes.number.isRequired,
      lon: PropTypes.number.isRequired,
    })
  ).isRequired,
  selectedLocationName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FavoriteLocations;
