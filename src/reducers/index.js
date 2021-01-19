import { combineReducers } from 'redux';
import selectLocationReducer from './selectLocationReducer';
import fetchLocationsListReducer from './fetchLocationsListReducer';

export default combineReducers({
  selectedLocation: selectLocationReducer,
  locationsList: fetchLocationsListReducer,
});
