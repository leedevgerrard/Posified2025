import express from 'express';
import dotenv from 'dotenv';

import { connectDB } from './config/db.js';
import { config } from './config/config.js';
import { globalErrorHandler } from './middleware/globalErrorHandler.js';

const app = express();
dotenv.config()

const PORT = config.port;

// Global Error Handler
app.use(globalErrorHandler);

// Server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
  });
});