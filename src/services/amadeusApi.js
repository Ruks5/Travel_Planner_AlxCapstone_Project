import axios from 'axios';

const API_KEY = import.meta.env.VITE_AMADEUS_API_KEY;
const API_SECRET = import.meta.env.VITE_AMADEUS_API_SECRET;
const API_URL = import.meta.env.VITE_AMADEUS_API_URL;

let accessToken = null;
let tokenExpiry = null;

const getAccessToken = async () => {
  if (accessToken && tokenExpiry && Date.now() < tokenExpiry) {
    return accessToken;
  }

  try {
    const response = await axios.post(
      `${API_URL}/v1/security/oauth2/token`,
      new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: API_KEY,
        client_secret: API_SECRET,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    accessToken = response.data.access_token;
    tokenExpiry = Date.now() + response.data.expires_in * 1000;
    return accessToken;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
};

const apiClient = axios.create({
  baseURL: API_URL,
});

apiClient.interceptors.request.use(async (config) => {
  const token = await getAccessToken();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const searchDestinations = async (keyword) => {
  try {
    const response = await apiClient.get('/v1/reference-data/locations', {
      params: {
        keyword,
        subType: 'CITY',
        page: {
          limit: 10,
        },
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching destinations:', error);
    throw error;
  }
};

export const getFlightOffers = async (origin, destination, departureDate, adults = 1) => {
  try {
    const response = await apiClient.get('/v2/shopping/flight-offers', {
      params: {
        originLocationCode: origin,
        destinationLocationCode: destination,
        departureDate,
        adults,
        max: 10,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error getting flight offers:', error);
    throw error;
  }
};

export const getHotelOffers = async (cityCode) => {
  try {
    const response = await apiClient.get('/v2/shopping/hotel-offers', {
      params: {
        cityCode,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error getting hotel offers:', error);
    throw error;
  }
};

export const getCityInformation = async (keyword) => {
  try {
    const response = await apiClient.get('/v1/reference-data/locations/cities', {
      params: {
        keyword,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error getting city information:', error);
    throw error;
  }
};

export const getPointsOfInterest = async (latitude, longitude) => {
  try {
    const response = await apiClient.get('/v1/reference-data/locations/pois', {
      params: {
        latitude,
        longitude,
        radius: 20,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error getting points of interest:', error);
    throw error;
  }
};