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

// const cors = require("cors");
// const mongodb = require("mongodb")

// const workers = require("./api/workers.route")
// const dao = require("./mongo-dao");

// const MongoClient = mongodb.MongoClient
// app.use(cors())
// app.use(express.json())

// app.get("/api/workers", (req,res) => {
//     dao.getAllWorkers((error,data) => {
//         if (data) {
//             res.send(data)
//         } else {
//             res.statusCode = 500
//             res.end()
//         }
//     });
// });


// app.get("/hello", (req,res) => {
//     res.send("Hello from the backend server")
// })

// app.use("/api/workers", workers)
// app.use("*", (req,res) => res.status(404).json({error: "not found"}));



// MongoClient.connect(
//     process.env.WORKERDATA_DB_URI,
//     {
//         poolSize: 50,
//         wtimeoutMS: 2500,
//         useNewUrlParse: true
//     }
//     )
//     .catch(error => {
//         console.error("Could not connect to MongoDB", error)
//         process.exit(1)
//     })
//     .then(async client => {
//         app.listen(port,()=> {
//             console.log(`Server is running on port ${port}`);
//         })
//     })