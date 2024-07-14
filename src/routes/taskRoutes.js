const express = require('express');
const Task = require('../models/task');
const User = require('../models/user');
const router = express.Router();

router.get('/' ,  (req, res) => {
    res.send('Task API is working !');   
});

//CRUD operations for Task

//Create Task
// router.post('/create', async (req, res) => {
//     try {
//         const { title , description  } = req.body;
//         const { id } = req.headers;
//         const newTask = new Task(req.body);
//         await newTask.save();
//         id = newTask._id ;
//         await User.findByIdAndUpdate(id, { $push: { tasks: newTask._id } });
//         res.status(201).send({newTask , message : 'Task created successfully'});
//     } catch (error) {
//         res.status(400).send(error);
//     }
// });


module.exports = router;