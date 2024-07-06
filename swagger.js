const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const routes = require('./src/routes/taskRoutes');
const express = require('express');
const app = express ();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'TaskIT Api',
      version: '2.0',
      description: 'API documentation for your Node.js server',
    },
    servers : [ 
        {
      url: 'http://localhost:3001',
      description: 'Development server',
    },
    ],
},
  apis: ['./app.js'], // Path to the API routes

  
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;

