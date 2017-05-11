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


app.listen(process.env.PORT_PROD, () => {
  console.log(`listening to server @ port ${process.env.PORT_PROD}`);
});

export default app;
