const express = require('express');
const app = express();
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const routes = require('./src/routes/taskRoutes');



app.use(express.json());

const port = 5000;
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// Your application routes go here...
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://anisdb:S9WbXwVLUTOHfZR9@taskitproject.j9lrxoc.mongodb.net/?retryWrites=true&w=majority&appName=TaskItProject";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
  
});

app.use('/taskRoutes', routes);

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Make the appropriate DB calls
    await listDatabases(client);
    await createTask(client, {
      title: "Finish project ",
      description: "Finish the project by 10/10/2024",
      status: "pending",
      created_at: Date.now()
    });
    await createMultipleTasks(client, [
      {
        title: "update ALB Script ",
        description: "Finish it by 01/08/2024",
        status: "Not started",
        created_at: Date.now()
      },
      {
        title: "Finish project",
        description: "Finish the project by 10/10/2024",
        status: "pending",
        created_at: Date.now()
      }
    ]);
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }

}
async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  
  console.log("Databases:");
  databasesList.databases.forEach(db => 
    console.log(` - ${db.name}`));

}
run().catch(console.dir);

async function createTask(client, newTask) {
  const result = await client.db("taskit").collection("tasks").insertOne(newTask);
  console.log(`New task created with the following id: ${result.insertedId}`);
}
async function createMultipleTasks(client, newTasks) {
  const result = await client.db("taskit").collection("tasks").insertMany(newTasks);
  console.log(`${result.insertedCount} new tasks created with the following ids:`);
  console.log(result.insertedIds);
}



app.get ('/', (req, res) => {
    res.json({ message: 'API Working' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});



module.exports = routes;

