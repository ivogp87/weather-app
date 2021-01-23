const longLocationName = (locationName, country, state) => {
  if (state) return `${locationName}, ${country} (${state})`;

  return `${locationName}, ${country}`;
};

export default longLocationName;
