const express = require("express");
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/beebro");
const databaseName = 'beebro'

async function dbConnect() {
    let result = await client.connect();
    db = result.db(databaseName);
    return db.collection('items');

}
module.exports = dbConnect;