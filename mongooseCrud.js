const express = require("express");
const mongoose = require("mongoose")


const main = async () => {
    await mongoose.connect("mongodb://localhost:27017/beebro");
    const productSchema = new mongoose.Schema({
        name: String,
        gender: String
    });
    let productModel = mongoose.model("items", productSchema)
    let data = new productModel({ name: "dulal", gender: "male" });
    let result = await data.save();
    console.log("....result", result);
}

main();


const PORT = process.env.port || 4000;
const app = express()

app.get("/", (req, res) => {
    res.send("hello")
})

app.listen(PORT, () => {
    console.log(`${PORT} is running`);
})