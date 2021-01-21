import {
  WEATHER_FORECAST_LOADING,
  WEATHER_FORECAST_SUCCESS,
  WEATHER_FORECAST_ERROR,
} from '../actions/actionTypes';

const initialState = {
  status: 'idle',
  data: {},
  error: '',
};

const weatherForecastReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_FORECAST_LOADING:
      return { ...state, status: 'loading', error: '' };
    case WEATHER_FORECAST_SUCCESS:
      return { status: 'idle', data: action.payload, error: '' };
    case WEATHER_FORECAST_ERROR:
      return { status: 'error', data: {}, error: action.payload };
    default:
      return state;
  }
};

export default weatherForecastReducer;
