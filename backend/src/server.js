import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { connectDB } from './config/db.js';
import { config } from './config/config.js';
import { globalErrorHandler } from './middleware/globalErrorHandler.js';

import userRoute from './routes/userRoute.js';
import orderRoute from './routes/orderRoute.js';
import tableRoute from './routes/tableRoute.js';
import productRoute from './routes/productRoute.js';
import categoryRoute from './routes/categoryRoute.js';

const app = express();
dotenv.config()

const PORT = config.port;

// Middleware
app.use(cors({
  credentials: true,
  origin: ['http://localhost:5173']
}))
app.use(express.json());
app.use(cookieParser())

// Endpoints
app.use('/api/user', userRoute);
app.use('/api/order', orderRoute);
app.use('/api/table', tableRoute);
app.use('/api/product', productRoute);
app.use('/api/category', categoryRoute);

// Global Error Handler
app.use(globalErrorHandler);

// Server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
  });
});