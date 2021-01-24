import {
  CURRENT_LOCATION_LOADING,
  CURRENT_LOCATION_SUCCESS,
  CURRENT_LOCATION_ERROR,
} from './actionTypes';
import getUserGeolocation from '../utils/getUserGeolocation';
import getLocationName from '../utils/getLocationName';

const currentLocationLoading = () => ({ type: CURRENT_LOCATION_LOADING });

const currentLocationSuccess = (locationObject) => ({
  type: CURRENT_LOCATION_SUCCESS,
  payload: locationObject,
});

const currentLocationError = (error) => ({
  type: CURRENT_LOCATION_ERROR,
  payload: error,
});

const getCurrentLocation = () => async (dispatch) => {
  dispatch(currentLocationLoading());
  try {
    const userPosition = await getUserGeolocation();
    const { latitude, longitude } = userPosition;

    const locationDetails = await getLocationName(latitude, longitude);

    if (locationDetails.error) throw new Error(locationDetails.error);

    dispatch(currentLocationSuccess(locationDetails));
  } catch (error) {
    dispatch(currentLocationError(error.message));
  }
};

export default getCurrentLocation;
