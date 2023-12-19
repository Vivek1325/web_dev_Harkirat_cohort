// const { error } = require('console');
const express = require('express')
const app = express();
const port = 3000;

app.use(express.json());

app.post('/health-checkup', function(req, res, next){
    const kidneys = req.body.kidneys;
    kindeyLength = kidneys.length;
    if(kindeyLength > 2 || kindeyLength <= 0){
        throw new error
    }
    res.send("you have " + kindeyLength + ' kidneys')
});

app.use(function(error, req, res, next){
    res.status(500).send('An internal server error occured');
})

app.listen(port);