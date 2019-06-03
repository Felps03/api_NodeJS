const express = require('express');
app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
}));

const rotas = require('../app/rotas/rotas.js');
rotas(app);


app.use((req, resp, next) => {
    return resp.status(404).send('404');
});

app.use((erro, req, resp, next) => {
    return resp.status(500).send('500');
});

module.exports = app;