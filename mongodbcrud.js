const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017";
const databaseName = 'nodejs'
const client = new MongoClient(url);

async function dbConnect() {

    let result = await client.connect();
    let db = result.db(databaseName);
    let collection = db.collection('express');
    let response = await collection.find({}).toArray();
    console.log(response)

}

dbConnect();