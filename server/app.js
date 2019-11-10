const express = require('express')
const app = express()

const filmsRoutes = require('./api/routes/films');
const genresRoutes = require('./api/routes/genres');

app.use('/films', filmsRoutes)
app.use('/genres', genresRoutes);

module.exports = app;

