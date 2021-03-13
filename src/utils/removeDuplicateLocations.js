// Sometimes the API return the same location few times with slightly different geolocation coordinates
const removeDuplicateLocations = (locationsList) => {
  if (locationsList.length < 2) return locationsList;

  return locationsList.filter((location, index, array) => {
    const firstIndex = array.findIndex(
      ({ name, country, state }) =>
        location.name === name && location.country === country && location.state === state
    );

    return index === firstIndex;
  });
};

export default removeDuplicateLocations;
