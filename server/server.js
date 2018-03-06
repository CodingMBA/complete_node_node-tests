const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

// GET /users an arry of objects
// Give users a name and age property
// Create 2-3 users

app.get('/users', (req, res) => {
    res.send([{
        name: 'Andrew',
        age: 51
    }, {
        name: 'Susan',
        age: 49
    }]);
});

app.listen(3000);
module.exports.app = app;
