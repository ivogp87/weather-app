import { TOGGLE_FAVORITE_LOCATIONS } from './actionTypes';

const toggleFavoriteLocations = (locationName, latitude, longitude) => ({
  type: TOGGLE_FAVORITE_LOCATIONS,
  payload: {
    locationName,
    lat: latitude,
    lon: longitude,
  },
});

export default toggleFavoriteLocations;
