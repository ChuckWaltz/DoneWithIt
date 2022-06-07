import { useEffect, useState } from "react";
import * as Location from "expo-location";

const useLocation = (): Location.LocationObject | null => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );

  const requestLocation = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();

    if (granted) {
      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
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
