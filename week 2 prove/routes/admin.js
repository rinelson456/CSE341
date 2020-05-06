const path = require('path');

const express = require('express');

const router = express.Router();

const books = [];

router.get('/addProduct', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'addProduct.html'))
});

router.post('/addProduct', (req, res, next) => {
    books.push({ title: req.body.title });
    books.push({ summary: req.body.summary });
    res.redirect('/');
});

exports.routes = router;
exports.books = books;