const onSuccess = (position) => {
  const { latitude, longitude } = position.coords;
  return { latitude, longitude };
};

const onError = (error) => ({ error: error.message });

const getUserGeolocation = () =>
  new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      const errorMessage = new Error('Geolocation is not supported by this browser.');
      reject(onError(errorMessage));
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(onSuccess(position)),
        (error) => reject(onError(error))
      );
    }
  });

export default getUserGeolocation;
