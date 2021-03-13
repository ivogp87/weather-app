import {
  LOCATION_DETAILS_LOADING,
  LOCATION_DETAILS_SUCCESS,
  LOCATION_DETAILS_ERROR,
} from './actionTypes';
import { fetchLocationDetails } from '../apis/openWeatherMap';

const fetchLocationDetailsStart = () => ({ type: LOCATION_DETAILS_LOADING });

const fetchLocationDetailsSuccess = (locationDetails) => ({
  type: LOCATION_DETAILS_SUCCESS,
  payload: locationDetails,
});

const fetchLocationDetailsError = () => ({ type: LOCATION_DETAILS_ERROR });

const getLocationDetails = (latitude, longitude) => async (dispatch) => {
  dispatch(fetchLocationDetailsStart());

  try {
    const locationDetails = await fetchLocationDetails(latitude, longitude);
    dispatch(fetchLocationDetailsSuccess(locationDetails.data));
  } catch (error) {
    dispatch(fetchLocationDetailsError());
  }
};

export default getLocationDetails;
