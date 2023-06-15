const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/nodejs")

const express_schema = new mongoose.Schema({
    name: String,
    price: Number
});

const main = async () => {
    const express = mongoose.model('express', express_schema);
    let data = new express({ name: 'tie', price: '10' });
    const result = await data.save();
    console.log(result);
}

main();