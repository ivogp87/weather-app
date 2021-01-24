const getUserGeolocation = () =>
  new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      const errorMessage = new Error('Geolocation is not supported by this browser.');
      reject(errorMessage);
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (error) => reject(error)
      );
    }
  });

export default getUserGeolocation;
