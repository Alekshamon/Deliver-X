import { useEffect, useState } from "react";

export const useGeoLocation = () => {
  const [location, setLocation] = useState({
    lat: "",
    long: "",
    accepted: false,
  });

  const onSuccess = (location) => {
    console.info("onSuccess", location.coords.latitude);

    setLocation({
      lat: location.coords.latitude,
      long: location.coords.longitude,
      accepted: false,
    });
  };
  const onError = (error) => {
    setLocation({ lat: error, long: error, accepted: true });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({ message: "Geolocate not supported" });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    return () => {
      navigator.geolocation.clearWatch(
        navigator.geolocation.getCurrentPosition(onSuccess, onError)
      );
    };
  }, []);
  return location;
};
