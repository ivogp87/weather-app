import { combineReducers } from 'redux';
import currentLocationReducer from './currentLocationReducer';
import selectLocationReducer from './selectLocationReducer';
import favoriteLocationsReducer from './favoriteLocationsReducer';
import locationsListReducer from './locationsListReducer';
import weatherForecastReducer from './weatherForecastReducer';

export default combineReducers({
  currentLocation: currentLocationReducer, // current location of the user
  selectedLocation: selectLocationReducer, // selects for which location to display weather forecast
  favoriteLocations: favoriteLocationsReducer, // locations saved by the user
  locationsList: locationsListReducer, // searching for location by name return multiple results, e.g. London, UK, London, US...
  weatherForecast: weatherForecastReducer, // weather forecast data
});
