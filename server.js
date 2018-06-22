var express, app, mongoose;
express = require('express');
app = express();
mongoose = require('mongoose');

app.set('port', process.env.PORT || 3000);

config = require('./configure'),
    app = config(app);

mongoose.connect('mongodb://localhost/imgPloadr');
mongoose.connection.on('open', function() {
    console.log('Mongoose connected.');
});

app.get('/', function(req, res) {
    res.send('Hello World');
});
app.listen(app.get('port'), function() {
    console.log('Server up: http://localhost:' + app.get('port'));
});
