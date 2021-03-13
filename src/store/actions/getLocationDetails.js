import {
  LOCATION_DETAILS_REQUEST,
  LOCATION_DETAILS_SUCCESS,
  LOCATION_DETAILS_ERROR,
} from './actionTypes';
import { fetchLocationDetails } from '../../apis/openWeatherMap';

const getLocationDetailsRequest = () => ({ type: LOCATION_DETAILS_REQUEST });

const getLocationDetailsSuccess = (locationDetails) => ({
  type: LOCATION_DETAILS_SUCCESS,
  payload: locationDetails,
});

const getLocationDetailsError = () => ({ type: LOCATION_DETAILS_ERROR });

const getLocationDetails = (latitude, longitude) => async (dispatch) => {
  dispatch(getLocationDetailsRequest());

  try {
    const locationDetails = await fetchLocationDetails(latitude, longitude);
    dispatch(getLocationDetailsSuccess(locationDetails.data));
  } catch (error) {
    dispatch(getLocationDetailsError());
  }
};

export default getLocationDetails;
