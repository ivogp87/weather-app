import {
  WEATHER_FORECAST_LOADING,
  WEATHER_FORECAST_SUCCESS,
  WEATHER_FORECAST_ERROR,
} from '../actions/actionTypes';

const initialState = {
  status: 'idle',
  data: null,
};

const weatherForecastReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_FORECAST_LOADING:
      return { ...state, status: 'loading' };
    case WEATHER_FORECAST_SUCCESS:
      return { ...initialState, data: action.payload };
    case WEATHER_FORECAST_ERROR:
      return { ...initialState, status: 'error' };
    default:
      return state;
  }
};

export default weatherForecastReducer;
