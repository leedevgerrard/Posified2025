import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'

import { connectDB } from './config/db.js';
import { config } from './config/config.js';
import { globalErrorHandler } from './middleware/globalErrorHandler.js';

import userRoute from './routes/userRoute.js';

const app = express();
dotenv.config()

const PORT = config.port;

// Middleware
app.use(express.json());
app.use(cookieParser())

// Endpoints
app.use('/api/user', userRoute);

// Global Error Handler
app.use(globalErrorHandler);

// Server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
  });
});