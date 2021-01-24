import {
  CURRENT_LOCATION_LOADING,
  CURRENT_LOCATION_SUCCESS,
  CURRENT_LOCATION_ERROR,
} from '../actions/actionTypes';

const initialState = {
  status: 'idle',
  data: {},
  error: '',
};

const currentLocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_LOCATION_LOADING:
      return { ...initialState, status: 'loading' };
    case CURRENT_LOCATION_SUCCESS:
      return { ...initialState, data: action.payload };
    case CURRENT_LOCATION_ERROR:
      return { status: 'error', data: {}, error: action.payload };
    default:
      return state;
  }
};

export default currentLocationReducer;
