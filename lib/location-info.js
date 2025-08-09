export const getLocationData = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e.message);
  }
};

export const getLocationLatLongList = async () => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/api/location`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e.message);
  }
};

export const getLocationLatLong = async (locationName) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/api/location/${locationName}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e.message);
  }
};

export const getResolvedLatLong = async (location, lat, lon) => {
  console.log("getResolvedLatLong", location, lat, lon);
  if (lat && lon) {
    return { lat, lon };
  }
  const locationLatLong = await getLocationLatLong(location);
  console.log(locationLatLong);

  if (locationLatLong.latitude && locationLatLong.longitude) {
    const lat = locationLatLong.latitude;
    const lon = locationLatLong.longitude;
    return { lat, lon };
  }
};
