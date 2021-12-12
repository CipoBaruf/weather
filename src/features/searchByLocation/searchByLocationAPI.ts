import axios from "axios";

export function autocompleteLocations(location: string) {
  const params = {
    apikey: process.env.REACT_APP_ACUWEATHER_API_KEY,
    q: location,
  };
  try {
    const response = axios.get(
      `${process.env.REACT_APP_BASE_LOCATIONS_URL}/cities/autocomplete`,
      { params }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

export function getByLocation(locationKey: number) {
  const params = {
    apikey: process.env.REACT_APP_ACUWEATHER_API_KEY,
    q: locationKey,
  };
  try {
    const response = axios.get(
      `${process.env.REACT_APP_BASE_CONDITIONS_URL}/${locationKey}`,
      { params }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}
