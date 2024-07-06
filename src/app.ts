// src/app.ts

import express from 'express';
import taskRoutes from './routes/taskRoutes';
import { connectDatabase } from './utils/database';

const app = express();

app.use(express.json());
app.use('/api', taskRoutes);

connectDatabase();

export default app;
