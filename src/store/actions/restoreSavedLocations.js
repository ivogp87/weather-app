import { RESTORE_SAVED_LOCATIONS } from './actionTypes';

const restoreSavedLocations = (locations) => ({
  type: RESTORE_SAVED_LOCATIONS,
  payload: locations,
});

export default restoreSavedLocations;
