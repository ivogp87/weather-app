import {
  FETCH_LOCATIONS_LIST_LOADING,
  FETCH_LOCATIONS_LIST_SUCCESS,
  FETCH_LOCATIONS_LIST_ERROR,
} from '../actions/actionTypes';

const initialState = {
  status: 'idle',
  data: [],
  error: '',
};

const fetchLocationsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCATIONS_LIST_LOADING:
      return { status: 'loading', data: [], error: '' };
    case FETCH_LOCATIONS_LIST_SUCCESS:
      return { status: 'idle', data: action.payload, error: '' };
    case FETCH_LOCATIONS_LIST_ERROR:
      return { status: 'error', data: [], error: action.payload };
    default:
      return state;
  }
};

export default fetchLocationsListReducer;
