const express = require("express");
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/beebro");

const productSchema = new mongoose.Schema({
    name: String,
    gender: String
});

const main = async () => {
    let productModel = mongoose.model("items", productSchema)
    let data = new productModel({ name: "nava", gender: "male" });
    let result = await data.save();
    console.log("....result", result);
}

// main();

const updatemain = async () => {
    let productModel = mongoose.model("items", productSchema)
    let data = await productModel.updateOne(
        {name:"nava"},
        {$set:{name:"Nava"}}
    )
    console.log(data)
}

// updatemain();

const deletemain = async () => {
    let productModel = mongoose.model("items", productSchema)
    let data = await productModel.deleteOne(
        {name:"Nava"}
    )
    console.log(data)
}

// deletemain();

const findmain = async () => {
    let productModel = mongoose.model("items", productSchema)
    let data = await productModel.find()
    console.log(data)
}

findmain();

const PORT = process.env.port || 4000;
const app = express()

app.get("/", (req, res) => {
    res.send("hello")
})

app.listen(PORT, () => {
    console.log(`${PORT} is running`);
})