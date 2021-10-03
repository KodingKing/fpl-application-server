'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const studentRoutes = require('./routes/student-routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const landingPage = async (req, res, next) => {
    try {
        res.send('Server is Active');
    } catch (error) {
        res.status(400).send(error.message);
    }
}
app.use('/api', studentRoutes.routes);
app.use('/', landingPage);

app.listen(config.port, () => console.log('App is listening on ' + config.port));