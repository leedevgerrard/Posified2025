import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

// User Endpoints
export const register = (data) => api.post('/api/user/register', data);
export const login = (data) => api.post('/api/user/login', data);
export const logout = () => api.post('/api/user/logout');
export const getUser = () => api.get('/api/user');