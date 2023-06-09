import { Router } from 'express';

import { saveTask, deleteTask, getTaskByID, getTaskCount, getTasks, updateTask } from '../controllers/tasks';

const router = Router();

/**
 * @swagger
 * /tasks:
 *  get: 
 *    summary: Get all tasks
 */

router.get('/tasks', getTasks)

/**
 * @swagger
 * /tasks/count:
 *  get: 
 *    summary: Get the count of all the existing tasks
 */
router.get('/tasks/count', getTaskCount)

/**
 * @swagger
 * /tasks/:id:
 *  get: 
 *    summary: Get a task by id
 */
router.get('/tasks/:id', getTaskByID)

/**
 * @swagger
 * /tasks:
 *  post: 
 *    summary: create a new task
 */
router.post('/tasks', saveTask)

/**
 * @swagger
 * /task:
 *  delete: 
 *    summary: Delete a task by id
 */
router.delete('/tasks/:id', deleteTask)

/**
 * @swagger
 * /task:
 *  put: 
 *    summary: Update a task by id
 */
router.put('/tasks/:id', updateTask)

export default router