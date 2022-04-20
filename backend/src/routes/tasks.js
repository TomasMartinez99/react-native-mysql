import { Router } from "express";
import { 
    getTasks, 
    getTask, 
    getTaskCount, 
    saveTask, 
    deleteTask,
    updateTask
} from "../controllers/tasks";

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: tasks endpoint
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: Get all Tasks
 *    tags: [Tasks]
*/
router.get('/tasks', getTasks);

/**
 * @swagger
 * /tasks/count:
 *  get:
 *    summary: get total tasks counter
 *    tags: [Tasks]
 */
router.get('/tasks/count', getTaskCount);

/**
 * @swagger
 * /tasks/{id}:
 *  get:
 *    summary: Get task by Id
 *    tags: [Tasks]
 */
router.get('/tasks/:id', getTask);

/**
 * @swagger
 * /tasks:
 *  post:
 *    summary: save a new Task
 *    tags: [Tasks]
 */
router.post('/tasks', saveTask);

/**
 * @swagger
 * /tasks/{id}:
 *  delete:
 *    summary: delete a task by Id
 *    tags: [Tasks]
 */
router.delete('/tasks/:id', deleteTask);

/**
 * @swagger
 * /tasks/{id}:
 *  put:
 *    summary: update a task by Id
 *    tags: [Tasks]
 */
router.put('/tasks/:id', updateTask);

export default router;