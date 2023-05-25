const mongodb = require("mongodb"); 
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");

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
  col.find().sort({name: 1}).toArray((error, allWorkers) => {
    if (!error) {
      callback(null,allWorkers);
    } else {
      callback("Failed to retrieve all worker data", undefined);
    }
  });
};

// module.exports.createUser = async function (name, contact, role, location, salary, userName, password) {
//   this.name = name;
//   this.contact=contact;
//   this.role=role;
//   this.location=location;
//   this.salary=salary;
//   this.userName=userName;
//   this.password=password;
// }

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

// const mongoose = require('mongoose')
    
// const UserSchema = new mongoose.Schema(
//     {
//         name: {type: String, required: true},
//         contact: {type: String, required: true},
//         role: {type: String, required: true},
//         location: {type: String, required: true},
//         salary: {type: String, required: true},
//         username: {type: String, required: true},
//         password: {type: String, required: true},
//     },
//     {collection: 'users'}
// )

// const model = mongoose.Model('UserSchema', UserSchema)

// module.exports = model