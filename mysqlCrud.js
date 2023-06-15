const express = require('express')
const mysql = require("mysql")
const bodyParser = require("body-parser")
const app = express()
const port = process.env.PORT || 3001;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json())

var conn = mysql.createConnection({
    host: "127.0.0.1",
    user: 'bros',
    password: "Satya199$$",
    database: "bros"
})

conn.connect(function (err) {
    if (err) throw err;
    console.log("conn sucess")
})


app.get("/", (req, res) => {
    console.warn(req.query.id)
    console.log(req.query.id)
    // let sql = `SELECT * FROM Person WHERE PersonID=${req.query.id}`;
    // let sql = "SELECT Person.PersonID, Person.FirstName, saheb.orderName FROM saheb INNER JOIN Person ON saheb.orderId=Person.PersonID";
    // let sql = "SELECT Person.PersonID,Person.FirstName, saheb.orderName FROM saheb LEFT JOIN Person ON saheb.order ID=Person.PersonID";
    // let sql = "SELECT Person.PersonID,Person.FirstName, saheb.orderName FROM saheb RIGHT JOIN Person ON saheb.orderID=Person.PersonID"
    // let sql = "SELECT Person.PersonID,Person.FirstName, saheb.orderName FROM Person FULL OUTER JOIN saheb ON saheb.orderId=Person.PersonID";
    // let sql = "SELECT COUNT(PersonID) from Person";
    // conn.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log("data reterived", result)
    // })
    res.send("Hello Users...")
    conn.query("Select * from profile_user_profile",(err,result)=>{
        console.log("result",result)
    })
})


app.post("/post/table", (req, res) => {
    let orderId = req.body.orderId;
    let orderName = req.body.orderName;
    conn.query("INSERT INTO saheb VALUES(?,?)", [orderId, orderName], (err) => {
        if (err) throw err;
        console.log("data inserted into table 2")
    })
})


app.post("/post", (req, res) => {
    let PersonID = req.body.PersonID;
    let LastName = req.body.LastName;
    let FirstName = req.body.FirstName;
    let Address = req.body.Address;
    let City = req.body.City;
    conn.query("INSERT INTO Person VALUES(?,?,?,?,?)", [PersonID, LastName, FirstName, Address, City], (err) => {
        if (err) throw err;
        console.log("data posted")
    })
})


app.put("/update", (req, res) => {
    // let sql = "UPDATE Person SET FirstName='king' WHERE PersonID=1";
    conn.query("UPDATE Person SET FirstName='king' WHERE PersonID=1", (err) => {
        if (err) throw err;
        console.log("row updated...")
    })
    res.send("How r u!")
})


app.delete("/delete", (req, res) => {
    let sql = "DELETE FROM Person WHERE PersonID=1";
    conn.query(sql, (err) => {
        if (err) throw err;
        console.log("Row Deleted...")
    })
})


app.listen(port, () => {
    console.log(`listening on ${port}`)
})

