import { combineReducers } from 'redux';
import selectLocationReducer from './selectLocationReducer';
import favoriteLocationsReducer from './favoriteLocationsReducer';
import locationsListReducer from './locationsListReducer';
import weatherForecastReducer from './weatherForecastReducer';

export default combineReducers({
  selectedLocation: selectLocationReducer,
  favoriteLocations: favoriteLocationsReducer,
  locationsList: locationsListReducer,
  weatherForecast: weatherForecastReducer,
});
