'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _config = require('../config/config');

var _config2 = _interopRequireDefault(_config);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * creating an instance of dotenv and express
 */
// importing bodyParser module
// importing  express framework
_dotenv2.default.config(); // importing the config file
// importing dotenv library

var app = (0, _express2.default)();
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());
app.use('/api/v0', _routes2.default);

// app.use((err, req, res, next) => {
//   res.status(200).send('Request could not be completed. Please try again');
// });

// const port = () => {
//   if (process.env.NODE_ENV === 'DEV') {
//     return process.env.PORT_DEV;
//   } else if (process.env.NODE_ENV === 'TEST') {
//     return process.env.PORT_TEST;
//   }
//   return process.env.PORT_PROD || 4000;
// };
var port = 5000;

// routes(app);
app.listen(port, function () {
  console.log('listening to server @ port ' + port);
});