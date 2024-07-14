const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();


mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('Database is connected successfully!');

})

module.exports = mongoose.connection;




// async function main() {

//     const uri = "mongodb+srv://anis123:anis123@cluster0.mef0pya.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//     const client = new MongoClient(uri);

//     try {
//     await client.connect();
//     console.log('Database is connected successfully!');
//     // await createListing(client, {
//     //     name: "ANIS",
//     //     email: "anis.boukerdoune@gmail.com",
//     //     password: "123456",
//     // });
//     await listDatabase(client);

//     }catch(e){
//         console.error(e);
//     }
//     finally {
//        // await client.close();
//     }
// }
// main().catch(console.error);

// async function listDatabase(client){
//     const databasesList = await client.db().admin().listDatabases();
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// }


// async function createListing(client, newListing){
//     const result = await client.db("DB").collection("users").insertOne(newListing);
//     console.log(`New listing created with the following id: ${result.insertedId}`);
// }

//module.exports = { createListing};
