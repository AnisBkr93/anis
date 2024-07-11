const mongoose = require('mongoose');
const date = new Date();

const { MongoClient , ServerApiVersion} = require('mongodb');
const uri = "mongodb+srv://anis123:anis123@cluster0.mef0pya.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client = new MongoClient(uri , { 
    serverApi: 
    {
        version: ServerApiVersion.v1,
        strict: true ,
        deprecationErrors : true
    }
     });

async function run () {
    try {
        await client.connect();
        console.log('Connected to the database');
    } finally {
        await client.close();
    }

}
run().catch(console.dir);





