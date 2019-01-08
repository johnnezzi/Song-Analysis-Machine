const app = require('./app.js');

const PORT = process.env.PORT || 9090;

app.listen(PORT, err => {
  if (err) console.log(err);
  console.log(`listening on PORT ${PORT}.....`);
});
