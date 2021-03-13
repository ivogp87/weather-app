import {
  LOCATIONS_LIST_REQUEST,
  LOCATIONS_LIST_SUCCESS,
  LOCATIONS_LIST_ERROR,
} from './actionTypes';
import { fetchLocationsByName } from '../../apis/openWeatherMap';

const getLocationsListRequest = () => ({ type: LOCATIONS_LIST_REQUEST });

const getLocationsListSuccess = (locationsList) => ({
  type: LOCATIONS_LIST_SUCCESS,
  payload: locationsList,
});

const getLocationsListError = () => ({ type: LOCATIONS_LIST_ERROR });

const getLocationsList = (locationName) => async (dispatch) => {
  dispatch(getLocationsListRequest());
  try {
    const locationsList = await fetchLocationsByName(locationName);
    dispatch(getLocationsListSuccess(locationsList.data));
  } catch (error) {
    dispatch(getLocationsListError());
  }
};

export default getLocationsList;
