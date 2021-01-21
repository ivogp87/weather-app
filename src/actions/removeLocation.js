import { REMOVE_LOCATION } from './actionTypes';

const removeLocation = (location) => ({
  type: REMOVE_LOCATION,
  payload: location,
});

export default removeLocation;
