const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/week 3 prove/views'));

const adminRoutes = require('./week 3 prove/routes/admin');
const shopRouter = require('./week 3 prove/routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'styles')));

app.use('/admin', adminRoutes);
app.use(shopRouter);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000);