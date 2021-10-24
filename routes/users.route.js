// USER ROUTE

module.exports = function (app) {
    const users = require('../controllers/users.controller');
    app.post('/signup', users.users);
}