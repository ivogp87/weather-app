import openWeatherMap from '../apis/openWeatherMap';

const formatResponse = (response) =>
  response.map(({ name, country, lat: latitude, lon: longitude, state = '' }) => ({
    locationName: name,
    country,
    state,
    latitude,
    longitude,
  }));

// Remove duplicate locations - sometimes the API return the same location few times with slightly different geolocation coordinates
const filterLocations = (locationsList) => {
  if (locationsList.length === 1) return locationsList;

  return locationsList.reduce((uniqueLocations, location) => {
    const isDuplicate = uniqueLocations.some(
      ({ locationName: name, country, state }) =>
        name === location.locationName && country === location.country && state === location.state
    );
    return isDuplicate ? uniqueLocations : [...uniqueLocations, location];
  }, []);
};

const getLocationCoordinates = async (locationName) => {
  try {
    const response = await openWeatherMap.get(`/geo/1.0/direct?q=${locationName}&limit=10`);

    // The API returns empty array if there's no such location. For example if there's a typo.
    // E.g.: locationName = Londom (notice the 'M' at the end of the word)
    if (!response.data.length) {
      throw new Error('no such location');
    }

    const formattedResponse = formatResponse(response.data);
    const uniqueLocations = filterLocations(formattedResponse);

    return uniqueLocations;
  } catch (error) {
    const errorMessage =
      error.message === 'no such location'
        ? "We can't find such location. Please check your spelling and try again."
        : 'Something went wrong, please try again.';
    return { error: errorMessage };
  }
};

export default getLocationCoordinates;
