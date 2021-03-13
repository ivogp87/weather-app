import {
  LOCATIONS_LIST_LOADING,
  LOCATIONS_LIST_SUCCESS,
  LOCATIONS_LIST_ERROR,
} from '../actions/actionTypes';

const initialState = {
  status: 'idle',
  data: null,
};

const locationsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOCATIONS_LIST_LOADING:
      return { ...state, status: 'loading' };
    case LOCATIONS_LIST_SUCCESS:
      return { status: 'idle', data: action.payload };
    case LOCATIONS_LIST_ERROR:
      return { ...state.data, status: 'error' };
    default:
      return state;
  }
};

export default locationsListReducer;
