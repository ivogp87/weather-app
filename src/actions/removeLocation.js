import { REMOVE_LOCATION } from './actionTypes';

const removeLocation = (locationObject) => ({
  type: REMOVE_LOCATION,
  payload: locationObject,
});

export default removeLocation;
