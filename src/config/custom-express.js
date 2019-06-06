const express = require('express');
const app = express();
const bodyParser = require("body-parser");
let expressValidator = require('express-validator');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(expressValidator());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});

const rotas = require('../app/rotas/rotas.js');
rotas(app);

app.use((req, resp, next) => {
    return resp.status(404).send('404');
});

app.use((erro, req, resp, next) => {
    return resp.status(500).send('500');
});

module.exports = app;