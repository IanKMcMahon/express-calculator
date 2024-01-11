
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/mean', function(req, res) {

});

app.get('/median', function(re, res) {

});

app.get('/mode', function(re, res) {

});