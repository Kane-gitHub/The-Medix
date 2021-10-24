// PATIENT LIST CONTROLLER

const Users = require('../models/users.model');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

exports.userList = (req, res) => {
    Users.find({admin: false}, (err, docs) => {
        if (err) {
            console.log(err);
            res.status(500).send({ message: "Some error occurred while retrieving patient information. Sorry :|" });
        } else {
            res.send({patients: docs})
        }
    });    
}