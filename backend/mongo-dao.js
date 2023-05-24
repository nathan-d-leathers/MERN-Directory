// const mongodb = require("mongodb"); 
// const url = "mongodb://localhost:27017/";
// let dbPool; 

// mongodb.MongoClient.connect(url, function (error, db) {
//   if (!error) {
//     dbPool = db.db("directorydb");
//   } else {
//     console.error("Connection to MongoDB failed.", error);
//   }
// });

// module.exports.getAllWorkers = function (callback) {
//   let col = dbPool.collection("workerdata");
//   col.find().toArray((error, allWorkers) => {
//     if (!error) {
//       callback(null,allWorkers);
//     } else {
//       callback("Failed to retrieve all worker data", undefined)
//     }
//   });
// };

// might have clonficts with new index.js file