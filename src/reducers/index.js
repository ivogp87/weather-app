import { combineReducers } from 'redux';
import selectLocationReducer from './selectLocationReducer';
import favoriteLocationsReducer from './favoriteLocationsReducer';
import fetchLocationsListReducer from './fetchLocationsListReducer';
import weatherForecastReducer from './weatherForecastReducer';

export default combineReducers({
  selectedLocation: selectLocationReducer,
  favoriteLocations: favoriteLocationsReducer,
  locationsList: fetchLocationsListReducer,
  weatherForecast: weatherForecastReducer,
});
