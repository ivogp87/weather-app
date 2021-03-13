import {
  LOCATION_DETAILS_LOADING,
  LOCATION_DETAILS_SUCCESS,
  LOCATION_DETAILS_ERROR,
} from './actionTypes';
import { getLocationName } from '../apis/openWeatherMap';

const fetchLocationDetailsStart = () => ({ type: LOCATION_DETAILS_LOADING });

const fetchLocationDetailsSuccess = (locationDetails) => ({
  type: LOCATION_DETAILS_SUCCESS,
  payload: locationDetails,
});

const fetchLocationDetailsError = () => ({ type: LOCATION_DETAILS_ERROR });

const fetchLocationDetails = (latitude, longitude) => async (dispatch) => {
  dispatch(fetchLocationDetailsStart());

  try {
    const locationDetails = await getLocationName(latitude, longitude);
    dispatch(fetchLocationDetailsSuccess(locationDetails.data));
  } catch (error) {
    dispatch(fetchLocationDetailsError());
  }
};

export default fetchLocationDetails;
