import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './FavoriteLocations.module.scss';
import Card from '../Card';
import IconButton from '../IconButton';
import Button from '../Button';

const LocationsMenu = ({ locations, currentLocationName, selectedLocationName, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close the mobile menu on click outside the menu and when menu item is clicked
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (isOpen) {
      const closeMenu = () => {
        setIsOpen(false);
      };

      document.addEventListener('click', closeMenu);
      return () => document.removeEventListener('click', closeMenu);
    }
  }, [isOpen]);

  const menuClass = isOpen
    ? `${styles.locationsMenu} ${styles.locationsMenuActive}`
    : styles.locationsMenu;
  const buttonClass = isOpen ? styles.mobileButton : '';

  if (locations.length === 0) return null;

  return (
    <Card>
      <header className={styles.locationsHeader}>
        <h2>Your Locations</h2>
        <IconButton
          type="button"
          className={styles.menuIcon}
          onClick={() => setIsOpen(!isOpen)}
          icon={isOpen ? 'times' : 'bars'}
        />
      </header>
      <ul className={menuClass}>
        {locations.map((location) => {
          const { fullLocationName } = location;
          const buttonColor = fullLocationName === selectedLocationName ? 'primary' : 'secondary';
          const buttonIcon = fullLocationName === currentLocationName ? 'map-marker-alt' : '';

          return (
            <li key={fullLocationName}>
              <Button
                onClick={() => onClick(location)}
                icon={buttonIcon}
                color={buttonColor}
                className={buttonClass}
              >
                {fullLocationName}
              </Button>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

LocationsMenu.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.object),
  currentLocationName: PropTypes.string,
  selectedLocationName: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

LocationsMenu.defaultProps = {
  locations: [],
  currentLocationName: '',
  selectedLocationName: '',
};

export default LocationsMenu;
