// AUTHENTICATION ROUTE

module.exports = (app) => {
    const auth = require('../controllers/auth.controller');
    app.get('/auth/:key', auth.userAuth)
}