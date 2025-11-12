import dotenv from 'dotenv';
dotenv.config();

export const config = Object.freeze({
  port: process.env.PORT,
  dbURI: process.env.MONGO_URI,
  nodeEnv: process.env.NODE_ENV || 'development',
  accessTokenSecret: process.env.JWT_SECRET
})