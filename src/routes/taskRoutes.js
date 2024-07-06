/**
 * @swagger
 * components:
 *   schemas:
 *     Tasks:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - status
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the task
 *         title:
 *           type: string
 *           description: The title of your task
 *         description:
 *           type: string
 *           description: The book explanation
 *         status:
 *           type: string
 *           description: Whether you have finished doing the task
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the task was added
 *     
 */
/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: The Task managing API
 * /book:
 *   get:
 *     summary: Lists all the tasks
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: The list of the tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tasks'
 *   post:
 *     summary: Create a new task
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tasks'
 *     responses:
 *       200:
 *         description: The created task.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tasks'
 *       500:
 *         description: Some server error
 * /book/{id}:
 *   get:
 *     summary: Get the task by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The task id
 *     responses:
 *       200:
 *         description: The task response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tasks'
 *       404:
 *         description: The task was not found
 *   put:
 *    summary: Update the task by the id
 *    tags: [Tasks ]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The task id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Tasks'
 *    responses:
 *      200:
 *        description: The task was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Tasks'
 *      404:
 *        description: The task was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the task by id
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The task id
 *
 *     responses:
 *       200:
 *         description: The task was deleted
 *       404:
 *         description: The task was not found
 */
const express = require('express');
const router = express.Router();
//const {nanoid } = require('nanoid');

const idLength = 8;

router.get('/', (req, res) => {
    const tasks = req.app.db.get('tasks')
    
    res.send(tasks);
}
);

router.get('/:id', (req, res) => {
    const tasks = req.app.db.get('tasks').find({ id: req.params.id }).value();
    if (task) {
        res.send(task);
    } else {
        res.status(404).send('Not found');
    }
}
);

router.post('/', async (req, res) => {
    const task = new Task({
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
    } );
    try {
        const newTask = await task.save();
        res.status(201).send(newTask);
    } catch (error) {
        res.status(400).send('Somethinh went wrong !');
    }
   
}
);

router.put('/:id', (req, res) => {
    try {
        req.app.db.get('tasks').find({ id: req.params.id }).assign(req.body).write();
        res.send(req.app.db.get('tasks').find({ id: req.params.id }));

    }
    
    catch (error) {
        res.status(500).send('Some error happened');
    }
}
);

router.delete('/:id', (req, res) => {
    req.app.db.get('tasks').remove({ id: req.params.id }).write();
    res.sendStatus(200);
}
);

module.exports = router;