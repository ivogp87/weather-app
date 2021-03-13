import {
  WEATHER_FORECAST_LOADING,
  WEATHER_FORECAST_SUCCESS,
  WEATHER_FORECAST_ERROR,
} from './actionTypes';
import { fetchForecast } from '../apis/openWeatherMap';

const weatherForecastLoading = () => ({ type: WEATHER_FORECAST_LOADING });

const weatherForecastSuccess = (weatherForecast) => ({
  type: WEATHER_FORECAST_SUCCESS,
  payload: weatherForecast,
});

const weatherForecastError = () => ({ type: WEATHER_FORECAST_ERROR });

const getWeatherForecast = (latitude, longitude) => async (dispatch) => {
  dispatch(weatherForecastLoading());
  try {
    const weatherForecast = await fetchForecast(latitude, longitude);
    dispatch(weatherForecastSuccess(weatherForecast.data));
  } catch (error) {
    dispatch(weatherForecastError());
  }
};

export default getWeatherForecast;
