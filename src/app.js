const express = require('express'),
  dotenv = require('dotenv'),
  config = require('../config/config.js');

dotenv.config();
const app = express();
process.env.NODE_ENV = 'production';
const port = config[process.env.NODE_ENV].PORT;

app.get('/', (req, res) => {
  res.send('welcome to my first api');
});
app.listen(port, (err) => {
  if (!err) {
    console.log(`listening to server @ port ${port}`);
  } else {
    console.log(err);
  }
});
