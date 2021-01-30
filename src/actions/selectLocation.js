import { SELECT_LOCATION } from './actionTypes';

const selectLocation = (locationObject) => ({
  type: SELECT_LOCATION,
  payload: locationObject,
});

export default selectLocation;
