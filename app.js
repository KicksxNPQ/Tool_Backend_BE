require('dotenv').config()

const express = require('express');
const app = express();

const cors = require('cors')

const bodyParser = require("body-parser")

const {PORT} = require('./config');

const db = require('./models')

app.use(cors());

var api = require('./api')


app.use(bodyParser.json({limit: '50mb'}));


app.use(function(req, res, next){
    res.setTimeout(12000000, function(){
        console.log('Request has timed out.');
            res.send(408);
        });

    next();
});

app.use('/api', api);

app.listen(PORT, () => {
    console.log(PORT);
})
