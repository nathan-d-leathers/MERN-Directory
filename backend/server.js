const express = require("express");
const cors = require("cors");
const dao = require("./mongo-dao.js");
const app = express();
const dotenv = require("dotenv");
// const { MongoClient, Db } = require("mongodb");
// const { Router } = require("express");
// const { default: Register } = require("../directory-app/src/components/Register.js");
// var bodyParser=require("body-parser")

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
// app.post("/api/register", async (req,res) => {
//     console.log(req.body)
//     res.json({status: 'ok'})
// })
    


app.listen(port,()=> {
    console.log(`Server is running on port ${port}`);
});
