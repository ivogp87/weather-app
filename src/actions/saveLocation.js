import { SAVE_LOCATION } from './actionTypes';

const saveLocation = (location) => ({
  type: SAVE_LOCATION,
  payload: location,
});

export default saveLocation;
