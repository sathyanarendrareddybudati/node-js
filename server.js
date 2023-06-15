const http = require('http')
const data = require('./data')

// function get_data(req,res){
//     res.write('<h1>Hello world!</h1>');
//     res.end(); 
// }
// http.createServer(get_data).listen(8000);

// const get_data = (req,res) => {
//     res.write('<h1>Hello world!</h1>');
//     res.end(); 
// }
// http.createServer(get_data).listen(8000);


// http.createServer((req,res)=>{
//     res.write('<h1>Hello world!</h1>');
//     res.end();
// }).listen(8000);

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application\json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(5000);
console.log(process.argv)