import {
  LOCATIONS_LIST_LOADING,
  LOCATIONS_LIST_SUCCESS,
  LOCATIONS_LIST_ERROR,
} from '../actions/actionTypes';

const initialState = {
  status: 'idle',
  data: [],
  error: '',
};

const locationsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOCATIONS_LIST_LOADING:
      return { status: 'loading', data: [], error: '' };
    case LOCATIONS_LIST_SUCCESS:
      return { status: 'idle', data: action.payload, error: '' };
    case LOCATIONS_LIST_ERROR:
      return { status: 'error', data: [], error: action.payload };
    default:
      return state;
  }
};

export default locationsListReducer;
