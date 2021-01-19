import { SELECT_LOCATION } from './actionTypes';

const selectLocation = (location) => ({
  type: SELECT_LOCATION,
  payload: location,
});

export default selectLocation;
