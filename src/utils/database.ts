// src/utils/database.ts

import mongoose from 'mongoose';

export const connectDatabase = (): void => {
  // TODO: Implement database connection logic
  mongoose.connect('your_mongodb_connection_string', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('Database connected successfully');
  }).catch(err => {
    console.error('Database connection error:', err);
  });
};
