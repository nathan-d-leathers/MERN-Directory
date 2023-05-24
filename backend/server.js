const express = require("express");
const cors = require("cors");
const dao = require("./mongo-dao.js");
const app = express();
const dotenv = require("dotenv");
const { MongoClient, Db } = require("mongodb");
const { Router } = require("express");
const { default: Register } = require("../directory-app/src/components/Register.js");

dotenv.config()

const port = process.env.PORT || 6000

app.use(cors())
app.use(express.json())

app.get("/api/workers", (req,res) => {
    dao.getAllWorkers((error,data) => {
        if (data) {
            res.send(data)
        } else {
            res.statusCode = 500
            res.end()
        }
    });
});

app.get("/api/workers/:id", (req,res) => {
    dao.getCoworker(req.params.id, (error,data) => {
        if (data) {
            res.send(data)
        } else {
            res.statusCode = 500
            res.end()
        }
    })
});

app.use(express.static('./public'))

app.post(/user/register), function(req,res){
    var name = req.body.name;
    var contact = req.body.contact;
    var role = req.body.role;
    var location = req.body.location;
    var salary = req.body.salary;
    var username = req.body.username;
    var password = req.body.password;

    var data = {
        "name": name,
        "contact": contact,
        "role": role,
        "location": location,
        "salary": salary,
        "username": username,
        "password": password
    }
Db.collection('newUsers').insertOne(data,function(err, collection){
    if (err) throw err;
    console.log("Record inserted succesfully")
});

}


app.listen(port,()=> {
    console.log(`Server is running on port ${port}`);
});
