const app = require('express')();
const apiRouter = require('./routes/api.js');

app.use('/api', apiRouter);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: 'An error has occured' });
});

module.exports = app;
