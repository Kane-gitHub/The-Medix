// LOGIN ROUTE

module.exports = (app) => {
    const login = require('../controllers/login.controller');
    app.get('/login/:info', login.usersFind);
}