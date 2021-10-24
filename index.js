// DECLARING VARIABLES
// PROCESS ENV FOR THE PORT

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet');
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');
const path = require('path');

// HELMET FOR SECURITY

app.use(helmet());
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            "default-src": ["'self'"],
            "img-src": ["*"],
            "script-src": ["'self'", "'sha256-1kri9uKG6Gd9VbixGzyFE/kaQIHihYFdxFKKhgz3b80='"],
            "object-src": ["'none'"],
        },
    })
);

// ALLOWING EXPRESS TO LINK WITH REACT

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// BODY-PARSER

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// REQUEST HANDLERS FROM THE CLIENT SIDE

require('./routes/users.route.js')(app);
require('./routes/list.route.js')(app);
require('./routes/login.route.js')(app);
require('./routes/auth.route.js')(app);
require('./routes/patient.route.js')(app);
require('./routes/adminUpdate.route.js')(app);
require('./routes/adminDelete.route.js')(app);

// ATLAS CONNECTION 
const uri = "mongodb+srv://user_1:HypDev@hyperiondevcluster.mqvco.mongodb.net/DoctorsretryWrites=true&w=majority"
mongoose.Promise = global.Promise;

mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

mongoose.connection.on('error', function () {
    console.log('Connection to Mongo established.');
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});
mongoose.connection.once('open', function () {
    console.log("Successfully connected to the database");
})

// ERROR HANDLER
// SET LOCALS FOR GIVING AN ERROR IN DEVELOPMENT
// RENDER AN ERROR PAGE 

app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

// MODULE EXPORTS AND CONSOLE LOG FOR THE SERVER

module.exports = app;

app.listen(PORT, () => {
    console.log(`Now listening at http://localhost:${PORT}`)
})
