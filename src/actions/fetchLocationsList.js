import {
  FETCH_LOCATIONS_LIST_LOADING,
  FETCH_LOCATIONS_LIST_SUCCESS,
  FETCH_LOCATIONS_LIST_ERROR,
} from './actionTypes';
import getLocationCoordinates from '../utils/getLocationCoordinates';

const fetchLocationsListStart = () => ({ type: FETCH_LOCATIONS_LIST_LOADING });

const fetchLocationsListSuccess = (locationsList) => ({
  type: FETCH_LOCATIONS_LIST_SUCCESS,
  payload: locationsList,
});

const fetchLocationsListError = (error) => ({
  type: FETCH_LOCATIONS_LIST_ERROR,
  payload: error,
});

const fetchLocationsList = (locationName) => async (dispatch) => {
  dispatch(fetchLocationsListStart());
  try {
    const locationsList = await getLocationCoordinates(locationName);

    if (locationsList.error) throw new Error(locationsList.error);

    dispatch(fetchLocationsListSuccess(locationsList));
  } catch (error) {
    dispatch(fetchLocationsListError(error.message));
  }
};

export default fetchLocationsList;
