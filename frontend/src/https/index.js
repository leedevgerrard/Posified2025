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

// Table Endpoints
export const getAllTables = () => api.get('/api/table');
export const addTable = (data) => api.post('/api/table', data);

// Category Endpoints
export const getAllCategories = () => api.get('/api/category');
export const addCategory = (data) => api.post('/api/category', data);

// Product Endpoints
export const getAllProducts = () => api.get('/api/product');
export const addProduct = (data) => api.post('/api/product', data);
export const getProductByCategoryId = (categoryId) => api.get(`/api/product/${categoryId}`);

// Order Endpoints
export const getAllOrders = () => api.get('/api/order');
export const addOrder = (data) => api.post('/api/order', data);
export const updateOrder = (orderId, data) => api.put(`/api/order/${orderId}`, data);
export const updateOrderStatus = (orderId, data) => api.patch(`/api/order/${orderId}`, data);
export const cancelOrder = (orderId, data) => api.patch(`/api/order/${orderId}/cancel`, data);

// Transaction Endpoints
export const getAllTransactions = () => api.get('/api/transaction');
export const addTransaction = (data) => api.post('/api/transaction', data);
export const getTransactionById = (transactionId) => api.get(`/api/transaction/${transactionId}`)