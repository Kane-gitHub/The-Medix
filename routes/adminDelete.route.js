// ADMIN ROUTE - DELETE 

module.exports = (app) => {
    const users = require('../controllers/users.controller');
    app.delete('/delete', users.deleteOne);
}