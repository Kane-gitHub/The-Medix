// LIST ROUTE

module.exports = (app) => {
    const list = require('../controllers/list.controller');
    app.get('/getPatients', list.userList)
}