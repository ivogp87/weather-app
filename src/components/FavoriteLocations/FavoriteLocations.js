import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectLocation } from '../../actions';
import styles from './FavoriteLocations.module.scss';
import Card from '../Card';
import IconButton from '../IconButton';
import Button from '../Button';

const FavoriteLocations = () => {
  const dispatch = useDispatch();
  const favoriteLocations = useSelector((state) => state.favoriteLocations);
  const currentLocationName = useSelector((state) => state.currentLocation.data.fullLocationName);
  const selectedLocationName = useSelector((state) => state.selectedLocation.fullLocationName);

  const handleSelectLocation = (locationObject) => {
    dispatch(selectLocation(locationObject));
  };

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

  if (favoriteLocations.length === 0) return null;

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
        {favoriteLocations.map((location) => {
          const { fullLocationName } = location;
          const buttonColor = fullLocationName === selectedLocationName ? 'primary' : 'secondary';
          const buttonIcon = fullLocationName === currentLocationName ? 'map-marker-alt' : '';

          return (
            <li key={fullLocationName}>
              <Button
                onClick={() => handleSelectLocation(location)}
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

export default FavoriteLocations;
