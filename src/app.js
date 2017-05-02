<<<<<<< HEAD
import express from 'express'; // importing  express framework
import dotenv from 'dotenv'; // importing dotenv library
import bodyParser from 'body-parser'; // importing bodyParser module
import config from '../config/config';// imporrting the config file
import api from './routes';
<<<<<<< Updated upstream
=======
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import InvertedIndex from './InvertedIndex';
import config from '../config/config';
>>>>>>> 753d8b0741a72e8f0f2595e6bfe46eb3fae0d1de


=======
>>>>>>> Stashed changes
/**
 * creating an instance of dotenv abd express
 */
dotenv.config();
const app = express();
<<<<<<< HEAD
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', api);
process.env.NODE_ENV = 'production';
const port = config[process.env.NODE_ENV].PORT;
<<<<<<< Updated upstream


/**
 *  creating end points: createIndex and searchIndex
 */
=======
const api = app.Router();
app.use('/api', api);
api.use(bodyParser);
process.env.NODE_ENV = 'production';
const port = config[process.env.NODE_ENV].PORT;

api.post('/createIndex', InvertedIndex.createIndex);
>>>>>>> 753d8b0741a72e8f0f2595e6bfe46eb3fae0d1de
=======
>>>>>>> Stashed changes
app.listen(port, (err) => {
  if (!err) {
    console.log(`listening to server @ port ${port}`);
  } else {
    console.log(err);
  }
});
