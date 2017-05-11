import express from 'express'; // importing  express framework
import dotenv from 'dotenv'; // importing dotenv library
import bodyParser from 'body-parser'; // importing bodyParser module
import config from '../config/config';// importing the config file
import routes from './routes';

/**
 * creating an instance of dotenv and express
 */
dotenv.config();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/v0', routes);

// app.use((err, req, res, next) => {
//   res.status(200).send('Request could not be completed. Please try again');
// });

/* const port = () => {
  if (process.env.NODE_ENV === 'DEV') {
    return config.development.PORT;
  } else if (process.env.NODE_ENV === 'TEST') {
    return config.test.PORT;
  }
  return config.production.PORT;
};*/



// routes(app);
app.listen(process.env.PORT_PROD, () => {
  console.log(`listening to server @ port ${process.env.PORT_PROD}`);
});

