const express = require('express');
const User = require('./src/models/user');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const dbSetup = require('./src/utils/database');
const cors = require('cors');
const router = express.Router();
dotenv.config();

//


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/users', require('./src/routes/userRoutes'));
app.use('/tasks', require('./src/routes/taskRoutes'));

PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Welcome to the Task Manager API');
});


    





module.exports = app;


