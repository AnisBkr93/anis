// src/routes/taskRoutes.ts

import { Router } from 'express';
import { createTaskHandler, getTasksHandler, getTaskByIdHandler, updateTaskHandler, deleteTaskHandler } from '../controllers/taskController';

const router = Router();

router.post('/tasks', createTaskHandler);
router.get('/tasks', getTasksHandler);
router.get('/tasks/:id', getTaskByIdHandler);
router.put('/tasks/:id', updateTaskHandler);
router.delete('/tasks/:id', deleteTaskHandler);

export default router;
