// JavaScript source code
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Ini adalah halaman Home');
});

app.listen(8000, function () {
});