const mongodb = require("mongodb"); 
const dotenv = require("dotenv")

dotenv.config()

const uri = process.env.WORKERDATA_DB_URI
let dbPool; 

mongodb.MongoClient.connect(uri, function (error, db) {
  if (!error) {
    dbPool = db.db("directorydb");
  } else {
    console.error("Connection to MongoDB failed.", error);
  }
});

module.exports.getAllWorkers = function (callback) {
  let col = dbPool.collection("workerdata");
  col.find().toArray((error, allWorkers) => {
    if (!error) {
      callback(null,allWorkers);
    } else {
      callback("Failed to retrieve all worker data", undefined);
    }
  });
};
