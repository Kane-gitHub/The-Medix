// PATIENT CONTROLLER - CALLING THE LIST FORM FROM THE USERS SCHEMA

const Users = require('../models/users.model');

exports.patientFind = (req, res) => {
    Users.findOne({id_number: req.params.id}, (err, docs) => {
        if (err) {
            console.log(err)
            res.status(500).send({ message: "Some error occurred while retrieving patient information. Sorry :|" });
        } else {
            res.send({patientData: docs})
        }
    })
}