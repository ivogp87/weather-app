import openWeatherMap from '../apis/openWeatherMap';

const getLocationName = async (latitude, longitude) => {
  try {
    const response = await openWeatherMap.get(`/geo/1.0/reverse?lat=${latitude}&lon=${longitude}`);

    const { name: locationName, country, lat, lon, state = '' } = response.data[0];
    const fullLocationName = state
      ? `${locationName}, ${country} (${state})`
      : `${locationName}, ${country}`;

    return { locationName, country, state, fullLocationName, latitude: lat, longitude: lon };
  } catch (error) {
    return { error: "We can't find this location" };
  }
};

export default getLocationName;
