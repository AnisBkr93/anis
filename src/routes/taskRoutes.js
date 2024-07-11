const express = require('express');
const Task = require('../models/task');
const router = express.Router();

router.get('/' ,  (req, res) => {
    res.send('Task API is working !');   
});

//CRUD operations for Task


module.exports = router;