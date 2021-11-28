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
app.use('/api', api);

app.listen(PORT, () => {
    console.log(PORT);
})
