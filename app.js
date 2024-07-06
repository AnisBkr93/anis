const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./swagger"); // Ensure this path is correct
const Task = require("./src/models/task");
const app = express();

// Serve Swagger documentation
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Your API routes go here

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
 * /Task:
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
 * /Task/{id}:
 *   get:
 *     summary: Get the task by id
 *     tags: [Tasks]
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
// gettting all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.send(tasks);
    } catch (error) {
        res.status(500).send('Some error happened');
    }

}
);
// get task by id
router.get('/:id', async (req, res) => {
    const tasks = req.app.db.get('tasks').find({ id: req.params.id }).value();
    if (task) {
        res.send(task);
    } else {
        res.status(404).send('Not found');
    }
}
);
// create a task
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
        res.status(400).send('Something went wrong !');
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


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

module.exports = router;



