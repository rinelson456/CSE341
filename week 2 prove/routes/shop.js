const path = require('path');

const express = require('express');

const router = express.Router();

const adminData = require('./admin');

router.get('/', (req, res, next) => {
    const books = adminData.books;
    res.render('shop', {
        book: books,
        pageTitle: 'View Book',
        path: '/',
        hasBooks: books.length > 0
    });
});

module.exports = router;