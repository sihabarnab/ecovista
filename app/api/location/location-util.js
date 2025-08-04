const data = [
  {
    location: "London",
    latitude: 51.5074,
    longitude: -0.1278,
  },
  {
    location: "Paris",
    latitude: 48.8566,
    longitude: 2.3522,
  },
  {
    location: "New york",
    latitude: 40.7128,
    longitude: -74.006,
  },
  {
    location: "Dhaka",
    latitude: 23.8103,
    longitude: 90.4125,
  },
  {
    location: "Tokyo",
    latitude: 35.6762,
    longitude: 139.6503,
  },
  {
    location: "Berlin",
    latitude: 52.52,
    longitude: 13.405,
  },
  {
    location: "Sydney",
    latitude: -33.8688,
    longitude: 151.2093,
  },
  {
    location: "Moscow",
    latitude: 55.7558,
    longitude: 37.6173,
  },
  {
    location: "Cairo",
    latitude: 30.0444,
    longitude: 31.2357,
  },
  {
    location: "Rio de Janeiro",
    latitude: -22.9068,
    longitude: -43.1729,
  },
  {
    location: "Cape Town",
    latitude: -33.9249,
    longitude: 18.4241,
  },
  {
    location: "Toronto",
    latitude: 43.65107,
    longitude: -79.347015,
  },
  {
    location: "Mumbai",
    latitude: 19.076,
    longitude: 72.8777,
  },
  {
    location: "Beijing",
    latitude: 39.9042,
    longitude: 116.4074,
  },
  {
    location: "Buenos Aires",
    latitude: -34.6037,
    longitude: -58.3816,
  },
  {
    location: "Istanbul",
    latitude: 41.0082,
    longitude: 28.9784,
  },
  {
    location: "Seoul",
    latitude: 37.5665,
    longitude: 126.978,
  },
  {
    location: "Bangkok",
    latitude: 13.7563,
    longitude: 100.5018,
  },
  {
    location: "Singapore",
    latitude: 1.3521,
    longitude: 103.8198,
  },
  {
    location: "Kuala Lumpur",
    latitude: 3.139,
    longitude: 101.6869,
  },
  {
    location: "Lagos",
    latitude: 6.5244,
    longitude: 3.3792,
  },
  {
    location: "Nairobi",
    latitude: -1.2864,
    longitude: 36.8172,
  },
  {
    location: "Kolkata",
    latitude: 22.5726,
    longitude: 88.3639,
  },
];

function getLocations() {
  return data;
}

function getLocationByName(location) {
  if (!location) return null;

  const found = data.find(
    (item) => item.location.toLowerCase() === location.toLowerCase()
  );
  return found || {};
}

export { getLocationByName, getLocations };
