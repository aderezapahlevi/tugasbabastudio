// JavaScript source code
const express = require('express');
const app = express();

app.get('/product', function (req, res) {
    res.send('Ini adalah halaman Produk');
});

app.listen(8000, function () {
});
