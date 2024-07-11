const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./src/routes/userRoutes');
const taskRoutes = require('./src/routes/taskRoutes');
const date = new Date();


const app = express();
app.use(bodyParser.json());


require('dotenv').config();
require('./src/utils/database');
app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);


const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Task Manager API is working !'); 
}
);
 
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
}); 



