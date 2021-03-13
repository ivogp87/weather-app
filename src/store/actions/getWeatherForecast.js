import {
  WEATHER_FORECAST_REQUEST,
  WEATHER_FORECAST_SUCCESS,
  WEATHER_FORECAST_ERROR,
} from './actionTypes';
import { fetchForecast } from '../../apis/openWeatherMap';

const getWeatherForecastRequest = () => ({ type: WEATHER_FORECAST_REQUEST });

const getForecastSuccess = (weatherForecast) => ({
  type: WEATHER_FORECAST_SUCCESS,
  payload: weatherForecast,
});

const getWeatherForecastError = () => ({ type: WEATHER_FORECAST_ERROR });

const getWeatherForecast = (latitude, longitude) => async (dispatch) => {
  dispatch(getWeatherForecastRequest());
  try {
    const weatherForecast = await fetchForecast(latitude, longitude);
    dispatch(getForecastSuccess(weatherForecast.data));
  } catch (error) {
    dispatch(getWeatherForecastError());
  }
};

export default getWeatherForecast;
