// REQUIREMENTS
// CREATES NEW DOCUMENT BY READING DATA INPUTTED BY THE NEW USER

const Users = require('../models/users.model');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

exports.users = (req, res) => {
    
    const listNew = new Users({
        username: req.body.username,
        password: req.body.password,
        admin: false,
        name: req.body.name,
        surname: req.body.surname,
        dob: req.body.dob,
        id_number: req.body.id_number,
        medical_history: req.body.medical_history,
        allergies: req.body.allergies,
        appointments: req.body.appointments
    });

    listNew.save(function (err, data) {
        if (err) {
            console.log(err);
            res.status(500).send({ message: "Error occured while adding to-do item to database: item not added!!!" })
        } else {
            res.send({ 'data': data });
        }
    })
}


exports.updateDataOne = (req, res) => {
    let query = {}
    let query2 = {}
    switch (req.body.filter) {
        case 'username':
            query = { username: `${req.body.filterUpdate}` };
            break;
        case 'name':
            query = { name: `${req.body.filterUpdate}` };
            break;
        case 'id_number':
            query = { id_number: `${req.body.filterUpdate}` };
            break;
        default:
            break;
    }
    switch (req.body.propNew) {
        case 'username':
            query2 = { username: `${req.body.propData}` };
            break;
        case 'password':
            query2 = { password: `${req.body.propData}` };
            break;
        case 'name':
            query2 = { name: `${req.body.propData}` };
            break;
        case 'surname':
            query2 = { surname: `${req.body.propData}` };
            break;
        case 'dob':
            query2 = { dob: `${req.body.propData}` };
            break;
        case 'id_number':
            query2 = { id_number: `${req.body.propData}` };
            break;
        case 'medical_history':
            query2 = { medical_history: `${req.body.propData}` };
            break;
        case 'allergies':
            query2 = { allergies: `${req.body.propData}` };
            break;
        case 'appointments':
            query2 = { appointments: `${req.body.propData}` };
            break;
        default:
            break;
    }
   
    Users.findOneAndUpdate(query, query2, { new: true }, function (err, doc) {
        if (err) {
            console.log("Something wrong when updating data!");
            res.send("ERROR: Not Updated. " + err);
        } else {
            res.send({
              updatedData: doc
            });
        }
    })
}

exports.deleteOne = function (req, res) {
    Users.findOneAndRemove({id_number: `${req.body.id}` }, function (err) {
        if (err) {
            console.log("ERROR: Blogs NOT removed. " + err);
            res.send("ERROR: Blogs NOT removed. " + err);
        } else {
            res.send('deleted!');
        }   
    })
}

