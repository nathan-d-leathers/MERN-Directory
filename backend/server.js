const express = require("express");
const dotenv = require("dotenv")


const app = express();

dotenv.config()

const port = process.env.PORT || 6000

app.get("/hello", (req,res) => {
    res.send("Hello from the backend server")
})

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

// app.get("api/workers", (req,res) => {
//     dao.getAllWorkers((error,data) => {
//         if (data) {
//             res.send(data)
//         } else {
//             res.statusCode = 500
//             res.end()
//         }
//     });
// });

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