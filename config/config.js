import dotenv from 'dotenv';

// dotenv.config();
dotenv.load();
module.exports = {
  development: {
    PORT: process.env.PORT_DEV
  },
  test: {
    PORT: process.env.PORT_TEST
  },
  production: {
    PORT: process.env.PORT_PROD
  }
};
