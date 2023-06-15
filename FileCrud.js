
const fs = require('fs');
const path = require('path');
const dir_path = path.join(__dirname,'crud');
const file_path = `${dir_path}/file_crud.txt`;

//wrirting the content in file
fs.writeFileSync(file_path,"This is basic crud");

//reading the file of content
fs.readFile(file_path,'utf8',(err,item)=>{
    console.log(item)
})

//append the content in file
fs.appendFile(file_path,' of the file',(err)=>{
    if (!err) console.log('file has been updated')
})

//rename the file name
fs.rename(file_path,`${dir_path}/file_cruds.txt`,(err)=>{
    if (!err) console.log('file has been renamed')
})

//delete the file
fs.unlinkSync(`${dir_path}/file_cruds.txt`,(err)=>{
    if (!err) console.log('file has been deleted')
})
