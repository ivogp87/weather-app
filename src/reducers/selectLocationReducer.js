import { SELECT_LOCATION } from '../actions/actionTypes';

const selectedLocationReducer = (state = {}, action) => {
  switch (action.type) {
    case SELECT_LOCATION:
      return action.payload;
    default:
      return state;
  }
};

export default selectedLocationReducer;
