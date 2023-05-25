const mongoose = require('mongoose')
    
const UserSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        contact: {type: String, required: true},
        role: {type: String, required: true},
        location: {type: String, required: true},
        salary: {type: String, required: true},
        username: {type: String, required: true},
        password: {type: String, required: true},
    },
    {collection: 'users'}
)

const model = mongoose.Model('UserSchema', UserSchema)

