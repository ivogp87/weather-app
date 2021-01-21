import {
  WEATHER_FORECAST_LOADING,
  WEATHER_FORECAST_SUCCESS,
  WEATHER_FORECAST_ERROR,
} from './actionTypes';
import openWeatherMap from '../apis/openWeatherMap';

const weatherForecastLoading = () => ({ type: WEATHER_FORECAST_LOADING });

const weatherForecastSuccess = (weatherForecast) => ({
  type: WEATHER_FORECAST_SUCCESS,
  payload: weatherForecast,
});

const weatherForecastError = (error) => ({
  type: WEATHER_FORECAST_ERROR,
  payload: error,
});

const fetchWeatherForecast = (latitude, longitude) => async (dispatch) => {
  dispatch(weatherForecastLoading());
  try {
    const weatherForecast = await openWeatherMap.get(
      `/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely`
    );

    dispatch(weatherForecastSuccess(weatherForecast.data));
  } catch (error) {
    dispatch(weatherForecastError(error.message));
  }
};

export default fetchWeatherForecast;
