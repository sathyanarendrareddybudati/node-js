const express = require('express')
const path = require('path')

const app = express();
const publicpath = path.join(__dirname,'public')

app.get('',(req,res)=>{
    res.send(`<h1>Hello, This is Home page</h1><a href='/about'>Go To About Page</a>`)
});

app.get('/about',(req,res)=>{
    // res.send('Hello, This is About page')
    res.send(`
        <input type='text' placeholder='name' value='${req.query.name}' />
        <button>Click Me</button>
        <a href='/'>Go Back to Home Page`)
});

app.get('/name',(req,res)=>{
    res.send('Welcome ,'+ req.query.name)
})

//here rending the template of that extention
app.use(express.static(publicpath))

//here rending the template of that without extention
app.get('/temp',(req,res)=>{
    res.sendFile(`${publicpath}/index.html`)
})

app.set('view engine', 'ejs')
app.get('/profile',(req,res)=>{
    const user = {
        name:'satya',
        email:'satya@gmail.com',
        skills:['python','node','js','es']
    }
    res.render('profile',{user})
})

//here any url or of that api is not found page is 404
app.get('*',(req,res)=>{
    res.sendFile(`${publicpath}/404.html`)
})

app.listen(4000)