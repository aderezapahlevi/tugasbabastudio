// JavaScript source code
const express = require('express');
const app = express();

app.get('/detailproduct', function (req, res) {
    res.send('Ini adalah halaman detail Produk toko anda');
});

app.listen(8000, function () {
});