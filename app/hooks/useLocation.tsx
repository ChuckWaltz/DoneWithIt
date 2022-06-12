import { useEffect, useState } from "react";
import * as Location from "expo-location";

const useLocation = (): {
  latitude: number;
  longitude: number;
} | null => {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const requestLocation = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();

    if (granted) {
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});
      setLocation({ latitude, longitude });
    }
  };

  try {
    requestLocation();
  } catch (error) {
    console.log(error);
  }

  useEffect(() => {
    requestLocation();
  }, []);

  return location;
};

export default useLocation;
