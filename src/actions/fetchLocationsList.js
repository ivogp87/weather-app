import {
  LOCATIONS_LIST_LOADING,
  LOCATIONS_LIST_SUCCESS,
  LOCATIONS_LIST_ERROR,
} from './actionTypes';
import getLocationCoordinates from '../utils/getLocationCoordinates';

const fetchLocationsListStart = () => ({ type: LOCATIONS_LIST_LOADING });

const fetchLocationsListSuccess = (locationsList) => ({
  type: LOCATIONS_LIST_SUCCESS,
  payload: locationsList,
});

const fetchLocationsListError = (error) => ({
  type: LOCATIONS_LIST_ERROR,
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
