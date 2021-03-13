import {
  LOCATION_DETAILS_REQUEST,
  LOCATION_DETAILS_SUCCESS,
  LOCATION_DETAILS_ERROR,
} from '../actions/actionTypes';

const initialState = {
  status: 'idle',
  data: null,
};

const locationDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOCATION_DETAILS_REQUEST:
      return { ...state, status: 'loading' };
    case LOCATION_DETAILS_SUCCESS:
      return { status: 'idle', data: action.payload };
    case LOCATION_DETAILS_ERROR:
      return { ...state, status: 'error' };
    default:
      return state;
  }
};

export default locationDetailsReducer;
