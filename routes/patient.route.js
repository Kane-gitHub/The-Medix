// PATIENT ROUTE

module.exports = (app) => {
   const patients  = require('../controllers/patient.controller');
   app.get('/patient/:id', patients.patientFind)
}