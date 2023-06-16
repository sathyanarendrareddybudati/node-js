const express = require('express');
require("./config");
const Product = require('./schemas');

const app = express();
app.use(express.json());

app.post('/', async (req, res) => {
    const data = new Product(req.body)
    let result = await data.save();
    console.log(result)
    res.send({ 'result': result });
})

app.get('/', async (req, res) => {
    let result = await Product.find()
    console.log(result)
    res.send({ 'result': result });
})

app.get('/search/:key',async(req,res) =>{
    console.log(req.params.key)
    let result = await Product.find({
        "$or":[
            {"name":{$regex:req.params.key}}
        ]
    })
    console.log(result)
    res.send({ 'result': result });
})

app.delete('/:_id', async (req, res) => {
    console.log(req.params)
    let result = await Product.deleteOne(req.params);
    console.log(result)
    res.send({ 'result': result });
})

app.patch('/:_id', async (req, res) => {
    let result = await Product.updateOne(req.params,
        { $set: req.body }
    );
    console.log(result)
    res.send({ 'result': result });
})

app.listen(5000);