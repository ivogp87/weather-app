import {
  LOCATIONS_LIST_LOADING,
  LOCATIONS_LIST_SUCCESS,
  LOCATIONS_LIST_ERROR,
} from './actionTypes';
import { fetchLocationsByName } from '../apis/openWeatherMap';

const fetchLocationsListStart = () => ({ type: LOCATIONS_LIST_LOADING });

const fetchLocationsListSuccess = (locationsList) => ({
  type: LOCATIONS_LIST_SUCCESS,
  payload: locationsList,
});

const fetchLocationsListError = () => ({ type: LOCATIONS_LIST_ERROR });

const getLocationsByName = (locationName) => async (dispatch) => {
  dispatch(fetchLocationsListStart());
  try {
    const locationsList = await fetchLocationsByName(locationName);
    dispatch(fetchLocationsListSuccess(locationsList.data));
  } catch (error) {
    dispatch(fetchLocationsListError());
  }
};

export default getLocationsByName;
