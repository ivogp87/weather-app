const formatLocationName = (name, country, state) =>
  state ? `${name}, ${country}, ${state}` : `${name}, ${country}`;

export default formatLocationName;
