import { SAVE_LOCATION, REMOVE_LOCATION, RESTORE_SAVED_LOCATIONS } from '../actions/actionTypes';

const favoriteLocationsReducer = (state = [], action) => {
  switch (action.type) {
    case SAVE_LOCATION:
      return [...state, action.payload];
    case REMOVE_LOCATION: {
      const { locationName, country, state: region } = action.payload;
      return state.filter(
        (location) =>
          location.locationName !== locationName ||
          location.country !== country ||
          location.state !== region
      );
    }
    case RESTORE_SAVED_LOCATIONS:
      return action.payload;
    default:
      return state;
  }
};

export default favoriteLocationsReducer;
