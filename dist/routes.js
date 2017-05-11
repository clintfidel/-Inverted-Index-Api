'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _InvertedIndex = require('./InvertedIndex');

var _InvertedIndex2 = _interopRequireDefault(_InvertedIndex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// importing the InvertedIndex class

var invertedIndex = new _InvertedIndex2.default(); // importing express for routing

var app = _express2.default.Router();

app.post('/createIndex', function (req, res) {
  req.setEncoding('utf8');
  var _req$body = req.body,
      fileName = _req$body.fileName,
      fileContent = _req$body.fileContent;

  var createdIndex = invertedIndex.createIndex(fileName, JSON.parse(fileContent));
  res.send(createdIndex);
});

// app.post('/searchIndex', (req, res) => {
// const { index, fileName, ...terms } = req.body;
// const searchTermResult = invertedIndex.SearchIndex(...term,(JSON.parse(index, fileName, ...terms);
//   res.send(searchTermResult);
// });


exports.default = app;