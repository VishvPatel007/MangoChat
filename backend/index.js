const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 3001;
app.listen(PORT);
console.log("*********** Server is running on port " + PORT +" *******************");

app.post('/register', (req, res) => {

});

app.post('/login', (req, res) => {

});

app.post('/messageSent', (req, res) => {

});

app.post('/transaction', (req, res) => {

});

