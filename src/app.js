import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import InvertedIndex from './InvertedIndex';
import config from '../config/config';

dotenv.config();
const app = express();
const api = app.Router();
app.use('/api', api);
api.use(bodyParser);
process.env.NODE_ENV = 'production';
const port = config[process.env.NODE_ENV].PORT;

api.post('/createIndex', InvertedIndex.createIndex);
app.listen(port, (err) => {
  if (!err) {
    console.log(`listening to server @ port ${port}`);
  } else {
    console.log(err);
  }
});
