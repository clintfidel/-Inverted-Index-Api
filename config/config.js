const dotenv = require('dotenv');

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
