var express = require('express');
var app = express();

app.use(express.static('src'));

app.use(function log (req, res, next) {
    console.log([req.method, req.url].join(' '));
    next();
});

app.get('api/hello',(req,res) => {
    res.send({express: "hello from server"})
})

app.listen(8888, function() {
    console.log('Listening on 8888..');
});