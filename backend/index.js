// const mongodb = require("mongodb")
// const dotenv = require("dotenv")
// const app = require("./server")
// // const dao = require("./mongo-dao")

// dotenv.config()

// const MongoClient = mongodb.MongoClient

// const port = process.env.PORT || 6000

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

