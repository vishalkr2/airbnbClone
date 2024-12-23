import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getDestinations = async () => {
  try {
    const response = await axios.get(`${API_URL}/destinations`);
    return response.data;
  } catch (error) {
    console.error('Error fetching destinations:', error);
    throw error;
  }
};

export const addDestination = async (destination) => {
  try {
    const response = await axios.post(`${API_URL}/destinations`, destination);
    return response.data;
  } catch (error) {
    console.error('Error adding destination:', error);
    throw error;
  }
};

export const getRooms = async () => {
  try {
    const response = await axios.get(`${API_URL}/rooms`);
    return response.data;
  } catch (error) {
    console.error('Error fetching rooms:', error);
    throw error;
  }
};

export const addRoom = async (room) => {
  try {
    const response = await axios.post(`${API_URL}/rooms`, room);
    return response.data;
  } catch (error) {
    console.error('Error adding room:', error);
    throw error;
  }
};