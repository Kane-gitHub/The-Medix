// REQUIREMENTS
require('dotenv').config();
const Users = require('../models/users.model.js');
const jwt = require('jsonwebtoken');

// VERIFIES PASSWORD AND USERNAME LINKING TO THE DATABASE
// GENERATES SIGNATURE AND SENDS TOKEN
// IF AN ADMIN LOGS IN PAYLOAD IS SET TO TRUE 
// IF PATIENT LOGS IN ADMIN IS SET TO FALSE

exports.usersFind = function (req, res, next) {
    let sentinel1 = 0;
    const inf = req.params.info.split(',');
    const pass = inf[1];
    const usr = inf[0];
    if (usr === 'Admin' && pass === 'Admin') {
        payload = {
            'username': usr,
            'admin': true  
        }
        const token = jwt.sign(JSON.stringify(payload), `${process.env.KEY_JWT}`, { algorithm: 'HS256' });
        res.send({ 'token': token });
    } else {
        Users.find({ admin: false }, function (err, users) {
            if (err) {
                console.log(err);
                res.status(500).send({ message: "Some error occurred while retrieving Patients list. Sorry :|" });
            } else {
                for (let i = 0; i < users.length; i++) {
                    if (users[i].username === usr && users[i].password === pass) {
                        sentinel1 = 1;
                    }
                }

                // CHECKS IF PASSWORD MATHES FROM THE DOCUMENT

                if (sentinel1 === 1) {
                    Users.findOne({ username: usr }, (err, docs) => {
                        if (err) {
                            console.log(err)
                            res.status(500).send({ message: "Some error occurred while retrieving patient information. Sorry :|" });
                        } else {
                            if (pass === docs.password) {
                                payload = {
                                    'username': usr,
                                    'admin': false,
                                    'id_number': docs.id_number
                                }
                                const token = jwt.sign(JSON.stringify(payload), `${process.env.KEY_JWT}`, { algorithm: 'HS256' });
                                res.send({ 'token': token })
                            }
                        }
                    })
                } else {
                    res.send({ "error": "authentication failed" })
                }
            }
        })
    }
}