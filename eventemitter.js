const express = require('express')
const eventEmitter = require('events')
const app = express();
const PORT = 5000
const event = new eventEmitter
let count = 0


event.on("CounterApi",()=>{
    count++;
    console.log("event called",count)
})

app.get('/', async(req,res)=>{
    event.emit("CounterApi")
    res.send('api called')
})

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
});
