const mongodb = require("mongodb"); 
const dotenv = require("dotenv")

dotenv.config()

const url = process.env.WORKERDATA_DB_URL
let dbPool; 

mongodb.MongoClient.connect(url, function (error, db) {
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

// double check that id number is being passed properly as a number or string
module.exports.getCoworker = function (id, callback) {
  let col = dbPool.collection("workerdata");
  col.find({ id: id }).toArray((error, coworker) => {
    if (!error) {
      callback(null, coworker[0]);
    } else {
      callback("Could not retrieve coworker", undefined);
    }
  });
};