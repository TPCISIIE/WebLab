
let middlewaresAfter = require('./Middlewares/after')
let middlewaresBefore = require('./Middlewares/before')
let index = require('./routes/index');
let users = require('./routes/users');
let config  = require('./config');

let express = require('express');
let app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.set('views', __dirname + '/Views');
app.set('twig options', {
    strict_variables: false,
});
app.set('view engine', 'twig');


middlewaresBefore(express, app, io);
app.use('/', index);
app.use('/users', users);

middlewaresAfter(express, app, io);







server.listen(config.port);