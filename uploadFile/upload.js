const express = require('express');
const multer = require('multer');
const PORT = 5000

const app = express();

const uploadFile = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb){
            cb(null, 'uploadFile')
        },
        filename: function (req, file, cb){
            cb(null, file.filename + "-" + Date.now() +'.jpg')
        }
    })
}).single('file')

app.post('/', uploadFile, async(req,res)=>{
    res.send('upload success')
})

app.listen(PORT, () => {
    console.log(`${PORT} is running`);
})