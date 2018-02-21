const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise;

// Connect to the db before the tests run using mocha's before
before((done) => {
    // connect to the database
    mongoose.connect('mongodb://localhost/testdb');
    mongoose.connection.once('open', function () {
        console.log('Connection has been made..');
        done();
    }).on('error', function (error) {
        console.log('Connection error: ', error);
    });
});

// dropping the collection before each test using mocha's beforeEach
beforeEach((done) => {
    mongoose.connection.collections.jlchars.drop(()=>{
        // console.log('dropping the collection before the test');
        done();
    });
});