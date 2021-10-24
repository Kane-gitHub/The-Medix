// ADMIN ROUTE - UPDATE

module.exports = (app) => {
    const users = require('../controllers/users.controller');
    app.put('/putOne', users.updateDataOne);
}