import { combineReducers } from 'redux';
import favoriteLocationsReducer from './favoriteLocationsReducer';
import locationsListReducer from './locationsListReducer';
import weatherForecastReducer from './weatherForecastReducer';
import locationDetailsReducer from './locationDetailsReducer';

export default combineReducers({
  favoriteLocations: favoriteLocationsReducer, // locations saved by the user
  locationsList: locationsListReducer, // searching for location by name return multiple results, e.g. London, UK, London, US...
  weatherForecast: weatherForecastReducer, // weather forecast data
  locationDetails: locationDetailsReducer, // name, country, state of the location
});
