import { SAVE_LOCATION } from './actionTypes';

const saveLocation = (locationObject) => ({
  type: SAVE_LOCATION,
  payload: locationObject,
});

export default saveLocation;
