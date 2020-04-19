// JavaScript source code
const express = require('express');
const app = express();

app.get('/home', function (req, res) {
    res.send('Ini adalah halaman Home');
});

app.listen(8000, function () {
});
