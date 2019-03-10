const express = require('express');
const app = require('express')();
const apiRouter = require('./routes/api.js');

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.get('/', (req, res, next) => {
  res.status(200).render('pages/home.ejs');
});

app.use('/api', apiRouter);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: 'An error has occured' });
});

module.exports = app;
