import { RESTORE_SAVED_LOCATIONS, TOGGLE_FAVORITE_LOCATIONS } from '../actions/actionTypes';

const favoriteLocationsReducer = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE_LOCATIONS: {
      const isFavoriteLocation = state.some(
        ({ locationName }) => locationName === action.payload.locationName
      );

      if (isFavoriteLocation)
        return state.filter(({ locationName }) => locationName !== action.payload.locationName);

      return [...state, action.payload];
    }
    case RESTORE_SAVED_LOCATIONS:
      return action.payload;
    default:
      return state;
  }
};

export default favoriteLocationsReducer;
