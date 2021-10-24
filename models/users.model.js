// USERS SCHEMA INFORMATION

const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        required: true
    },
    name: {
        type: String
    },
    surname: {
        type: String
    },
    dob: {
        type: String
    },
    id_number: {
        type: String
    },
    medical_history: {
        type: String
    },
    allergies: {
        type: String
    },
    appointments: {
        type: String
    }
})

module.exports = mongoose.model('Users', UsersSchema);